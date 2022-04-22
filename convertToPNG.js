// npm i --save jimp

const Jimp = require('jimp');
const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
//const imageDirPath = resolve(__dirname, './MVRC_Aliens');

// Get an array of the files inside the folder
//const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
// files.forEach(file => {
// 	let fileName = file
// 	Jimp.read(`./MVRC_Aliens/${fileName}`, function(err, image) {
// 		if(err) {
// 			console.log(err)
// 		} else {
// 			image.write( `./png/${file}`)	
// 		}
	
// 	})
// 	//console.log(file)
// 	});

for (let i = 2401; i < 2501; i++) {


	Jimp.read(`./MVRC_Aliens/${i}.jpg`, function (err, image) {
  //If there is an error in reading the image, 
  //we will print the error in our terminal
  if (err) {
    console.log(err)
  } else {
    image.write(`./png3/${i}.png`)
    console.log(`image ${i} was created!`)
  	}
	
})}


