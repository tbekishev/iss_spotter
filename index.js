const { nextISSTimesForMyLocation } = require('./iss');

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
fetchCoordsByIP(ip,(error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! coordinates:' , coordinates);
});
const myCoords = { latitude: '33.7489954', longitude: '-84.3879824' };

fetchISSFlyOverTimes(myCoords, (error, timestamp) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! timestamp:' , timestamp);
});*/
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});