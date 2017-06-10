var express = require('express');
var path = require('path');
var bodyparse = require('body-parser');

var index = require('./routes/index')
var todo = require('./routes/todos')

var app = express();

//view engine
app.set('views' , path.join(__dirname,'views'));
app.set('views engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));

app.use('/',index);
app.use('/api/v1',todo);

app.use(express.static( path.join(__dirname , 'client/dist/'))); // for angular in client
console.log(path.join(__dirname , 'client/dist'));

app.listen(2000,()=>{
  console.log('Server Started on Port 2000');
});
