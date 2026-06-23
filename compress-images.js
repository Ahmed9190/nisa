import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Help message
const printUsage = () => {
  console.log(`
Usage:
  node compress-images.js <file_or_directory> <max_size_kb> [options]

Arguments:
  <file_or_directory>  Path to the image file or directory containing images.
  <max_size_kb>         Target maximum file size in kilobytes (KB).

Options:
  --delete-original    Delete the original file after successful conversion/compression.
                       (Only deletes if the original file is not already a .webp file in the same path).
  --min-quality <num>  Minimum quality percentage to try (default: 20).
  --quality-step <num> Quality reduction step in each iteration (default: 5).
  --resize-step <num>  Resize multiplier when quality reaches minimum (default: 0.9).
  --verbose            Print detailed step-by-step compression details.
  --help               Show this help message.

Example:
  node compress-images.js public/images 200 --delete-original
`);
};

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h') || args.length < 2) {
  printUsage();
  process.exit(0);
}

const inputPath = args[0];
const maxSizeKb = parseFloat(args[1]);

if (isNaN(maxSizeKb) || maxSizeKb <= 0) {
  console.error('Error: max_size_kb must be a positive number.');
  printUsage();
  process.exit(1);
}

const maxSizeBytes = maxSizeKb * 1024;

// Parse options
const deleteOriginal = args.includes('--delete-original');
const verbose = args.includes('--verbose');

const getOptionValue = (flag, defaultValue) => {
  const index = args.indexOf(flag);
  if (index !== -1 && index + 1 < args.length) {
    return args[index + 1];
  }
  return defaultValue;
};

const minQuality = parseInt(getOptionValue('--min-quality', '20'), 10);
const qualityStep = parseInt(getOptionValue('--quality-step', '5'), 10);
const resizeStep = parseFloat(getOptionValue('--resize-step', '0.9'));

// Validate options
if (isNaN(minQuality) || minQuality < 1 || minQuality > 100) {
  console.error('Error: --min-quality must be between 1 and 100.');
  process.exit(1);
}
if (isNaN(qualityStep) || qualityStep < 1 || qualityStep > 50) {
  console.error('Error: --quality-step must be between 1 and 50.');
  process.exit(1);
}
if (isNaN(resizeStep) || resizeStep <= 0.1 || resizeStep >= 1.0) {
  console.error('Error: --resize-step must be between 0.1 and 0.99.');
  process.exit(1);
}

// Supported image extensions
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.heic', '.webp', '.tiff', '.bmp']);

// Format bytes to readable string
const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

// Check if magick is available
try {
  execSync('magick -version', { stdio: 'ignore' });
} catch (error) {
  console.error('Error: ImageMagick (the "magick" command) is not installed or not in your PATH.');
  console.error('Please install ImageMagick: https://imagemagick.org/');
  process.exit(1);
}

// Compress a single image
const compressImage = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) {
    return;
  }

  const originalSize = fs.statSync(filePath).size;
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const outputPath = path.join(dir, `${baseName}.webp`);

  console.log(`Processing: ${path.relative(process.cwd(), filePath)} (${formatSize(originalSize)})`);

  let quality = 90;
  let scale = 1.0;
  let attempt = 1;
  let success = false;
  let finalSize = 0;

  // Temporary path to avoid overwriting input if input is already webp and we fail
  const isInputWebp = ext === '.webp';
  const tempOutputPath = isInputWebp 
    ? path.join(dir, `${baseName}.temp_compress.webp`)
    : outputPath;

  while (true) {
    const resizeArg = scale < 1.0 ? `-resize ${Math.round(scale * 100)}%` : '';
    const cmd = `magick "${filePath}" -strip ${resizeArg} -quality ${quality} "${tempOutputPath}"`;

    if (verbose) {
      console.log(`  Attempt ${attempt}: Quality=${quality}, Scale=${(scale * 100).toFixed(0)}%`);
    }

    try {
      execSync(cmd, { stdio: 'ignore' });
    } catch (cmdError) {
      console.error(`  Error running ImageMagick command: ${cmdError.message}`);
      if (fs.existsSync(tempOutputPath)) {
        fs.unlinkSync(tempOutputPath);
      }
      return;
    }

    if (!fs.existsSync(tempOutputPath)) {
      console.error(`  Error: Output file was not created.`);
      return;
    }

    finalSize = fs.statSync(tempOutputPath).size;

    if (finalSize <= maxSizeBytes) {
      success = true;
      break;
    }

    // Try to reduce quality first
    if (quality > minQuality) {
      quality -= qualityStep;
      if (quality < minQuality) quality = minQuality;
    } 
    // If quality is already at min, start resizing
    else if (scale > 0.1) {
      scale *= resizeStep;
      quality = 80; // Reset quality to attempt higher quality at smaller dimensions
    } 
    // If we hit limits, stop
    else {
      break;
    }

    attempt++;
  }

  if (success) {
    if (isInputWebp) {
      // Overwrite the original webp with the compressed version
      fs.renameSync(tempOutputPath, filePath);
      console.log(`  Success! Compressed in place: ${formatSize(originalSize)} -> ${formatSize(finalSize)} (${((1 - finalSize / originalSize) * 100).toFixed(1)}% savings)`);
    } else {
      console.log(`  Success! Created webp: ${path.relative(process.cwd(), outputPath)} (${formatSize(finalSize)})`);
      
      if (deleteOriginal) {
        try {
          fs.unlinkSync(filePath);
          console.log(`  Deleted original: ${path.basename(filePath)}`);
        } catch (delError) {
          console.error(`  Failed to delete original file: ${delError.message}`);
        }
      }
    }
  } else {
    // Clean up temp file
    if (fs.existsSync(tempOutputPath)) {
      fs.unlinkSync(tempOutputPath);
    }
    console.log(`  Could not compress below target size ${maxSizeKb} KB. Best size achieved: ${formatSize(finalSize)} at Quality=${quality}, Scale=${(scale * 100).toFixed(0)}%`);
  }
  console.log('');
};

// Recursive directory traversal
const processDirectory = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      compressImage(fullPath);
    }
  }
};

// Main execution
try {
  const stat = fs.statSync(inputPath);
  if (stat.isDirectory()) {
    console.log(`Scanning directory recursively: ${inputPath}`);
    processDirectory(inputPath);
  } else {
    compressImage(inputPath);
  }
  console.log('Done processing.');
} catch (err) {
  console.error(`Error: Path not found or inaccessible: ${inputPath}`);
  process.exit(1);
}
