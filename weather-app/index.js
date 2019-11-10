const request = require('request');
const env = require('dotenv').config({ path: '../.env' })

const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/37.8267,-122.4233`;

request({
    url
}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});