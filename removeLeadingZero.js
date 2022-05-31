//let number = parseInt(numString, 10);
//console.log(number);

const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'images');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach(file => {
  let onlyNumber = file.replace(/[^\d.]/g, '')
  //console.log(onlyNumber) /// '123.'
  let noLeadZero = parseInt(onlyNumber, 10)
  rename(
  imageDirPath + `/${file}`,
  imageDirPath + `/${noLeadZero}.png`,
  err => console.log(err)
  )
});

