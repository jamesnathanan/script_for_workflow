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

const writeFile = (file) => {
  Jimp.read(`./images/${file}.png`,async function (err, image) {
  //If there is an error in reading the image, 
  //we will print the error in our terminal
  if (err) {
    console.log(err)
  } else {
    // const data = await image.write(`./1000_jpg/${file}.jpg`)
    const data = await image.resize(3000, 3000).quality(50).deflateLevel(9).write(`./outputImages/${file}.png`)
    console.log(`image ${file} was created!`)
    
    }
  
})
}

async function doWork(num) {
  try {
    const response = await writeFile(num)
    console.log(`File ${num} was read !`)
  } catch (err) {
    console.log(err)
  }
  
}

for (let i = 1; i < 11; i++) {
    //doWork(i);
    setTimeout(function timer() {
    // console.log("hello world");
    doWork(i);
  }, (i - 0) * 3000);
	}

// const forLoop = async _ => {
//   console.log('Start')

//   for (let i = 1; i < 11; i++) {
//     //
//     doWork(i);
//   }

//   console.log('End')
// }

//forLoop();

