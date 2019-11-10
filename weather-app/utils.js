const request = require('request');

module.exports = {
    geocode,
    forecast,
}

function geocode(address, callback) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&limit=1`;

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (response.body.features === undefined) {
            callback('Unable to find location, try another search', undefined);
        } else {
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            };

            callback(undefined, data);
        }
    });
};

function forecast(latitude, longitude, callback) {
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/${latitude},${longitude}`;

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (response.body.error) {
            callback('Unable to find weather location', undefined);
        } else {
            const { currently, daily } = response.body;
            const { temperature, precipProbability, precipType } = currently;

            const data = {
                summary: daily.data[0].summary,
                temperature,
                precipProbability,
                precipType,
            }
            callback(undefined, data);
        }
    })
}