var express = require('express');

var todoContorller = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoContorller(app);

//listen to port
app.listen(3000);
console.log('Listening to port 3000');
