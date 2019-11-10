const request = require('request');
const chalk = require('chalk');
const env = require('dotenv').config({ path: '../.env' })


const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&limit=1`
const darkSkyUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/37.8267,-122.4233?`;

request({
    url: darkSkyUrl,
    json: true
}, (error, response) => {
    const { currently, daily } = response.body;
    const { temperature, precipProbability, precipType } = currently;

    console.log(chalk.green(`${daily.data[0].summary}`));
    console.log(chalk.green(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of ${precipType || 'precipitation'}. `));
});

request({
    url: mapboxUrl,
    json: true
}, (error, response) => {
    const { features } = response.body;
    const lat = features[0].center[1];
    const lng = features[0].center[0];

    console.log(features[0].text);
    console.log(`Lat: ${lat}`);
    console.log(`Lng: ${lng}`);
});