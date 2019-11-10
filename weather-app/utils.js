const request = require('request');

module.exports = {
    geocode,
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