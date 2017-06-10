var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
const dbmongo = mongojs('mongodb://lblower:lblower@ds037205.mlab.com:37205/todos',['todos']) ;

//All Task
router.get('/todos',(req,res,next)=>{
  dbmongo.todos.find((err , todos)=>{
    if(err){
      throw new Error('error occured');
    }

      res.json(todos);

  });
});

//singletodo
router.get('/todo/:id',(req,res,next)=>{
  dbmongo.todos.findOne({ _id: mongojs.ObjectId(req.params.id) },(err , todo)=>{
    if(err){
      throw new Error('error occured');
    }

      res.json(todo);

  });
});

//save todo
router.post('/todo',(req,res,next)=>{
  var dataform = req.body;
  if(!dataform.text || !(dataform.isCompleted + '') ){
    res.status(400);
    res.json({'error':'Invalid Data'})
  }

  dbmongo.todos.save(dataform,(err , todo)=>{
    if(err){
      throw new Error('error occured');
    }

      res.json(todo);

  });
});



//Update todo
router.put('/todo/:id',(req,res,next)=>{
  var dataform = req.body;
  var updateObj = {};
  if(dataform.text){
    updateObj.text = dataform.text;
  }
  if(dataform.isCompleted !=  dataform.isCompleted + '' ){
    updateObj.isCompleted = dataform.isCompleted;
  }

  if(!updateObj){
    res.status(400);
    res.json({'error':'Invalid Data'})
  }else{

        dbmongo.todos.update({ _id: mongojs.ObjectId(req.params.id)},updateObj,(err , todo)=>{
        if(err){
          throw new Error('error occured');
        }

          res.json(todo);

      });
 }
});



//singletodo
router.delete('/todo/:id',(req,res,next)=>{

        dbmongo.todos.remove({ _id: mongojs.ObjectId(req.params.id)},'',(err , todo)=>{
        if(err){
          throw new Error('error occured');
        }

          res.json(todo);

      });

});




router.get('/',(req,res,next)=>{
  res.render('index.ejs');
});



module.exports = router;
