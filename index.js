const { fetchBreedDescription } = require('./breedFetcher');

// takes command line arg as the breed
const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error: ', error);
  } else {
    // print out the description for the breed
    console.log(desc);
  }
});

