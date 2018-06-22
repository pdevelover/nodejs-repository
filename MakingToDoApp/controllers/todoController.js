var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb://test:qwerty1@ds263740.mlab.com:63740/todo1p');

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({

  item: String

});

var Todo = mongoose.model('Todo', todoSchema);

//var data =  [{item: 'get milk'}, {item: 'walk dog'}, {item: 'learn how to be a ninja'}];

var urlencodedParser = bodyParser.urlencoded({enxtended: false});

module.exports = function(app){

  app.get('/todo', function(req, res) {

    //get data from mongodb and pass it to the view
    Todo.find({}, function (err, data) {

      if(err) throw err;

      res.render('todo', {todos: data});

    });

  });

  app.post('/todo', urlencodedParser, function(req, res) {

    //get data from the view and save on mongodb
    var newTodo = Todo(req.body).save(function (err, data) {

      if(err) throw err;

      res.json(data);

    });

  });

  app.delete('/todo/:item', function(req, res) {

    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {

      if(err) throw err;

      console.log('tou aqui');

      res.json(data);

    });

  });

}
