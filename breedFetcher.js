const request = require('request');

// takes command line arg as the breed
const breed = process.argv[2];

// makes a request to api to look for breed and prints out description
request(`https://api.thecaatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  // logs out an error if there is one
  if (error) {
    console.log('Error: ', error);
  } else {
    const data = JSON.parse(body);
    // if there is no breed this be truthy
    if (data[0] === undefined) {
      console.log('Sorry, breed not found');
    } else {
      // print out the description for the breed
      console.log(data[0].description);
    }
  }
});