//const { error } = require('console');
const request = require('request');
//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss')

const { printPassTimes } = require('./printPassTime')

//fetchMyIP();
//   (error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);

// });

// fetchCoordsByIP('108.162.128.241', (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
    
//   console.log(data);
    
// })

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});