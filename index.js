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

function calculatesFarePrice(start, destination){
  let distance = distanceFromHqInFeet(destination - start);
  if (distance <= 400)
  return 0
  else if(distance > 400 && distance < 2000)
  return distance * 
  
}

     