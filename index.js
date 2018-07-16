// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(north,south){
  return Math.abs(distanceFromHqInFeet(north)  - distanceFromHqInFeet(south));
}


     