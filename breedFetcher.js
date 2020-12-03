const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  // makes a request to api to look for breed and prints out description
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback('unable to find breed', null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

