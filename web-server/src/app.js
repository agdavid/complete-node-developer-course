const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// define pathes for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars
app.set('view engine', 'hbs'); // set templating engine
app.set('views', viewsPath); // point to custom views directory instead of /views
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

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
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Thomas',
        message: "We\'ll help you right away!"
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Mostly sunny',
        location: 'Atlanta'
    });
});

// add wildcard for sub-route of /help
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Thomas',
        message: 'Help article not found'
    })
});

// add wildcard route as catch-all for 404
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Thomas',
        message: 'Page not found'
    });
});

app.listen(3000, () => {
    console.log('Server is up on Port 3000');
});