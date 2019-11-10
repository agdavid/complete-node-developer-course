const request = require('request');
const chalk = require('chalk');
const env = require('dotenv').config({ path: '../.env' })

const utils = require('./utils.js');

const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&limit=1`
const darkSkyUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/37.8267,-122.4233`;

// DarkSky request

// request({
//     url: darkSkyUrl,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find weather location')
//     } else {
//         const { currently, daily } = response.body;
//         const { temperature, precipProbability, precipType } = currently;

//         console.log(chalk.green(`${daily.data[0].summary}`));
//         console.log(chalk.green(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of ${precipType || 'precipitation'}. `));
//     }
// });

utils.geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});