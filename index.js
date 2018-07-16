// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(north,south){
  return distanceFromHqInFeet(north) -  distanceFromHqInFeet(south);
}


      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
   