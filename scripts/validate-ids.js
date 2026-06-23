import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, '../src/data/products.json');

try {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/);
  
  const idToLines = {};
  
  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    // Match "id": "value"
    const match = line.match(/^\s*"id":\s*"([^"]+)"/);
    if (match) {
      const id = match[1];
      if (!idToLines[id]) {
        idToLines[id] = [];
      }
      idToLines[id].push(lineNumber);
    }
  });

  let hasDuplicates = false;
  for (const [id, lineNumbers] of Object.entries(idToLines)) {
    if (lineNumbers.length > 1) {
      console.error(`Duplicate ID found: "${id}" at lines: ${lineNumbers.join(', ')}`);
      hasDuplicates = true;
    }
  }

  if (hasDuplicates) {
    process.exit(1);
  } else {
    console.log('All product IDs in src/data/products.json are unique!');
    process.exit(0);
  }
} catch (error) {
  console.error(`Error validating product IDs: ${error.message}`);
  process.exit(1);
}
