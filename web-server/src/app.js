const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello Express!');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/weather', (req, res) => {
    res.send('Get the Weather');
});

app.get('/help', (req, res) => {
    res.send('Help Page');
});

app.listen(3000, () => {
    console.log('Server is up on Port 3000');
});