const request = require('request');

const url = 'https://ipstack.com/'
  request(url, function(error, response, body) {

    //const ourIP = JSON.parse(body);
    console.log(body);
  
    
  })