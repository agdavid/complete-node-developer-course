const https = require('https');
const env = require('dotenv').config({ path: '../.env' })

const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/42.3601,-71.058`;

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        console.log(chunk);
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);

        console.log(body);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end();