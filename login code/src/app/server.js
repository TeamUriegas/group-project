const express = require('express');
const api = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/app.component');
app.set('view engine', 'app.component');
app.use(express.static('public'));
app.use(bodyParser.json());
app.locals.pretty = true;

// "/" route handler
app.get('/', function (req, res) {
    res.render('index');
});

// tag route handler
app.get('/tags/:name.tag', function (req, res) {
    var name = 'tag-' + req.params.name;
    res.render('../client/' + name);
});

function newFunction() {
    'use strict';
}
// Mount the api sub application
app.use('./app.module.ts', api);

// Start listening for connections
app.listen(3000, function (err) {
    if (err) {
        console.error('Cannot listen at port 3000', err);
    }
    console.log('Fish Wrangler listening at port 3000');
});


