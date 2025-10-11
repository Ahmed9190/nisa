#!/bin/bash

# ==============================================================================
#
# Script: convert_image.sh
#
# Description:
#   Converts an HEIC image to WEBP format, resizing it by a given
#   percentage. This script is designed for efficiency and includes robust
#   error handling.
#
# Author:
#   Gemini (20+ years of experience)
#
# Dependencies:
#   - ImageMagick (https://imagemagick.org/)
#     Must be compiled with libheif delegate for HEIC support.
#
# Usage:
#   ./convert_image.sh <input_file.heic> <percentage>
#
# Example:
#   # Convert my_photo.heic to a WEBP image at 50% of its original size
#   ./convert_image.sh my_photo.heic 50
#
# ==============================================================================

# --- Strict Mode & Configuration ---
# Exit immediately if a command exits with a non-zero status.
set -e
# Treat unset variables as an error when substituting.
set -u
# Pipes return the exit status of the last command to fail.
set -o pipefail

# --- Pre-flight Checks & Input Validation ---

# 1. Check for ImageMagick dependency
if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed or the 'magick' command is not in your PATH." >&2
    echo "Please install ImageMagick and ensure it's accessible." >&2
    echo "On macOS (Homebrew): brew install imagemagick --with-heif" >&2
    echo "On Debian/Ubuntu:   sudo apt-get install imagemagick libheif-examples" >&2
    exit 1
fi

# 2. Validate script arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_file.heic> <percentage>" >&2
    echo "Example: $0 my_photo.heic 50" >&2
    exit 1
fi

INPUT_FILE="$1"
RESIZE_PERCENTAGE="$2"
BASENAME="${INPUT_FILE%.*}"
OUTPUT_FILE="${BASENAME}.webp"

# 3. Check if the input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file not found at '$INPUT_FILE'" >&2
    exit 1
fi

# 4. Validate percentage is a positive integer between 1-100
if ! [[ "$RESIZE_PERCENTAGE" =~ ^[0-9]+$ ]] || [ "$RESIZE_PERCENTAGE" -le 0 ] || [ "$RESIZE_PERCENTAGE" -gt 100 ]; then
    echo "Error: Percentage must be a whole number between 1 and 100." >&2
    exit 1
fi

# --- Main Processing Logic ---

echo "Processing '$INPUT_FILE'..."

# Perform the conversion and resizing using ImageMagick
# -quality 85: A good balance between quality and file size for WEBP.
# -strip: Removes all profiles and comments, reducing file size.
magick "$INPUT_FILE" \
    -strip \
    -resize "${RESIZE_PERCENTAGE}%" \
    -quality 85 \
    "$OUTPUT_FILE"

# --- Completion ---

echo "✅ Success! Image converted and saved to '$OUTPUT_FILE'"
exit 0
