const request = require('request');
const chalk = require('chalk');
const env = require('dotenv').config({ path: '../.env' })

const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/37.8267,-122.4233?`;

request({
    url,
    json: true
}, (error, response) => {
    const { currently, daily } = response.body;
    const { temperature, precipProbability, precipType } = currently;

    console.log(chalk.green(`${daily.data[0].summary}`));
    console.log(chalk.green(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of ${precipType || 'precipitation'}. `));
});