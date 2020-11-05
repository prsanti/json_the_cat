const request = require('request');
// error test
// const url = "ht://apieds/seasdfadsfarch?q=";
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    // If there is an error in the request, returns error and passes no description.
    if (error) return callback(error, null);
  
    const data = JSON.parse(body)[0];

    // If the breed does not exist from the search, passes no errors, and a description of "breed not found."
    if (!data) return callback(null, "Breed not found.");

    // After all edge cases are checked, passes no errors and returns description.
    const description = data.description;
    return callback(null, description);
  });
};

module.exports = { fetchBreedDescription };