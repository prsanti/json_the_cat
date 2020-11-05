const request = require('request');
const breed = process.argv[2];
// error test
// const url = "ht://apieds/seasdfadsfarch?q=";
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const searchBreedUrl = url + breed;

request(searchBreedUrl, (error, response, body) => {
  if (error) return error;

  const data = JSON.parse(body)[0];

  if (!data) {
    console.log("Breed not found.");
    process.exit();
  }

  console.log(data.description);
});