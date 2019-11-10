const env = require('dotenv').config({ path: '../.env' })

const utils = require('./utils.js');

utils.geocode('Boston', (error, geoData) => {
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