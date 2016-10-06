/**
 * Created by Sumiko on 10/6/2016.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
