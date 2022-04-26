// npm i --save jimp

const Jimp = require('jimp');
const { readdirSync, rename } = require('fs');
const { resolve } = require('path');



const writeFile = (file) => {
  Jimp.read(`./MVRC_Aliens/${file}.jpg`,async function (err, image) {
  //If there is an error in reading the image, 
  //we will print the error in our terminal
  if (err) {
    console.log(err)
  } else {
    const data = await image.write(`./test/${file}.png`)
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
  }, i * 3000);
	}


