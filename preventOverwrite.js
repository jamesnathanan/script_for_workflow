// Problem
const eyeColorCyan = {
  "Eye color/Cyan": [
    "Eyeball/White",
  ],
};

const backgroundBlue = {
  "Eye color/Cyan": [
    "Eyeball/Red",
    "Top lid/low"
  ],
};

const dependentTraits = {
  ...eyeColorCyan,
  ...backgroundBlue,
};

console.log(dependentTraits);
// Output: { "Eye color/Cyan": ["Eyeball/Red", "Top lid/low"] }
/*
If two objects have the same key name and you use the spread operator to combine them as in your example, the later object's value will overwrite the previous one.

In your example, both eyeColorCyan and backgroundBlue objects have a property with the key name "Eye color/Cyan". When you combine them using the spread operator, the value of "Eye color/Cyan" in backgroundBlue object will overwrite the value of "Eye color/Cyan" in eyeColorCyan object.

So, in the resulting dependentTraits object, "Eye color/Cyan" will have the value ["Eyeball/Red", "Top lid/low"], not ["Eyeball/White"] as in eyeColorCyan.

*/




// function mergeObjects(...objects) {
//   const result = {};

//   for (const obj of objects) {
//     for (const key in obj) {
//       if (result.hasOwnProperty(key)) {
//         result[key] = result[key].concat(obj[key]);
//       } else {
//         result[key] = obj[key];
//       }
//     }
//   }

//   return result;
// }

function mergeObjects(...objects) {
  const result = {};

  for (const obj of objects) {
    console.log('Merging object:', obj);

    for (const key in obj) {
      if (result.hasOwnProperty(key)) {
        const values = new Set([...result[key], ...obj[key]]);
        result[key] = Array.from(values);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}
/*
  prevent this result
'Head Gear/Red Mohawk (C)': [
    'Big Hats/None',
    'Balaclava/Black',
    'Balaclava/White',
    'Balaclava/Red Yellow',
    'Balaclava/Red',
    'Head Bandana/None',
    'Big Hats/None',
    'Balaclava/Black',
    'Balaclava/White',
    'Balaclava/Red Yellow',
    'Balaclava/Red'
  ],
  you can improve the mergeObjects() function to prevent repetitive values. One way to achieve this is by using a Set to store unique values instead of an array. 
  In this implementation, we use the spread operator to concatenate the arrays in result[key] and obj[key], then create a new Set to remove duplicate values. Finally, we convert the Set back to an array using Array.from() and store it in result[key]. This ensures that the final object contains only unique values for each key.
*/

const incompatibleTraits = mergeObjects(
  headGearIn,
  bigHatsIn,
  grinRainbowRoseIn,
  grinRainbowRose2In,
  grinRainbowReefaIn,
  grinRainbowReefa2In,
  shadesIn,
  hoodUpIn,
  bandanasIn,
  nerdGlassesIn,
  masksIn,
  gogglesIn,
  balaclavaAccessoryIn,
  headphonesIn,
  samuraiWarFanIn,
  bandanaRedBlackIn,
  redBasketballJerseyIn,
  pinkBomberJacketIn,
  greenBomberJacketIn,
  pinkBlackBomberJacketIn,
  pinkPurpleBomberJacketIn,
  blackPurpleHoodieIn,
  redBlackSuitIn,
  redBackwardsCapIn,
  redCapIn,
  headBandanaIn
);
