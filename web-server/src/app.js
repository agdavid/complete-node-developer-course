const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs'); // set templating engine for /views
app.use(express.static(publicDirectoryPath)); // serve static files

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Thomas'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Thomas'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "We\'ll help you right away!"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Mostly sunny',
        location: 'Atlanta'
    });
});

app.listen(3000, () => {
    console.log('Server is up on Port 3000');
});