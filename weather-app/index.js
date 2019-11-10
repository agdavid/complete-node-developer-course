const env = require('dotenv').config({ path: '../.env' })

const utils = require('./utils.js');

utils.forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});

utils.geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});