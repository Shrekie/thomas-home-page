require('./config/config.js');

// Package imports
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// Custom imports
const application = require('./routes/application');

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public/'));
app.use('/bower_components', express.static(path.join(__dirname, '/../bower_components')))

app.get('/error', (req, res) => {
	res.send('Something went wrong.');
});

// register application routes
app.use(application);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

app.listen('0.0.0.0' + process.env.PORT, () => {
	console.log('Started on port ', process.env.PORT);
});