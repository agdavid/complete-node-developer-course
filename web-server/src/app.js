const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

// Express will never serve this explicit index path b/c it defaults to the static path
// app.get('', (req, res) => {
//     res.send('<h1>Hello Express!<h1>');
// });

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Mostly sunny',
        location: 'Atlanta'
    });
});

app.listen(3000, () => {
    console.log('Server is up on Port 3000');
});