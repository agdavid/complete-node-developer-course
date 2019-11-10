const env = require('dotenv').config({ path: '../.env' })
const utils = require('./utils.js');

const location = process.argv[2];

if (location === undefined) {
    return console.log('No location provided, please try again');
} else {
    utils.geocode(location, (error, geoData) => {
        if (error) {
            return console.log(error)
        }

        const { latitude, longitude, location } = geoData;

        utils.forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location);
            console.log(forecastData);
        });

    });
}