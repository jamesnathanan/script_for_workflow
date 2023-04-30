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
