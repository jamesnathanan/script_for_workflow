const fs = require('fs');
// npm install sharp
const sharp = require('sharp');


const inputFolder = './OLD';
const outputFolder = './WEBP';

// Read the files from the input folder
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading input folder:', err);
    return;
  }

  // Filter out non-PNG files
  const pngFiles = files.filter(file => file.endsWith('.png'));

  // Create the output folder if it doesn't exist
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  // Convert each PNG file to WebP
  pngFiles.forEach(file => {
    const inputPath = `${inputFolder}/${file}`;
    const outputFileName = file.replace('.png', '.webp');
    const outputPath = `${outputFolder}/${outputFileName}`;

    sharp(inputPath)
      .toFormat('webp')
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error(`Error converting ${file}:`, err);
        } else {
          console.log(`Converted ${file} to ${outputFileName}`);
        }
      });
  });
});
