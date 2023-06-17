"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("_metadata.json");
let file1 = JSON.parse(file1Raw);

const csvHeader = "edition,background,special_back,body,eyes,face_accessory,clothing,mouth,head_accessory,special_front,hand_accessory\n";
let csvData = "";

file1.forEach((element) => {
  const edition = parseInt(element.meta.name.replace(/\D/g, "").trim(), 10);
  const attributes = element.meta.attributes;

  const newData = {
    background: attributes[0].value,
    special_back: attributes[1].value,
    body: attributes[2].value,
    eyes: attributes[3].value,
    face_accessory: attributes[4].value,
    clothing: attributes[5].value,
    mouth: attributes[6].value,
    head_accessory: attributes[7].value,
    special_front: attributes[8].value,
    hand_accessory: attributes[9].value,
  };

  const csvRow = Object.values(newData).join(",") + "\n";
  csvData += edition + "," + csvRow;
});

const csvContent = csvHeader + csvData;

fs.writeFile("_extractMetadata.csv", csvContent, (err) => {
  if (err) throw err;
  console.log("File _extractMetadata.csv was written successfully.");
});
