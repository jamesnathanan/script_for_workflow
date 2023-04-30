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




function mergeObjects(...objects) {
  const result = {};

  for (const obj of objects) {
    for (const key in obj) {
      if (result.hasOwnProperty(key)) {
        result[key] = result[key].concat(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

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
