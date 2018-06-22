var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');

});

app.get('/contact', function(req, res){

  res.sendFile(__dirname + '/contact.html');

});

app.get('/profile/:id', function(req, res){

  var data = {age: 11, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};

  res.render('profile', {person: req.params.id, data: data});

});


app.listen(3000);
