"use strict";

const fs = require("fs");

const _metadata = []

// let file1Raw = fs.readFileSync("3.json");
let file1Raw = fs.readFileSync("./build/json/_metadata_with_rarity.json");
let file1 = JSON.parse(file1Raw);

file1?.sort((a, b) => (a.rank > b.rank ? 1 : -1))
//console.log(file1);
file1.filter(({ rank, total_rarity_score, name }) => {
          return {
            name,
            rank,
            total_rarity_score,
          };
        })

file1.forEach((element) => {
	const metadata = {}
	metadata.name = element.name
	metadata.rank = element.rank
	metadata.total_rarity_score = element.total_rarity_score	

	_metadata.push(metadata)
})

// console.log(newData);

let writeData = JSON.stringify(_metadata, null, 2);

fs.writeFile("./build/json/ranking_report.json", writeData, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});
