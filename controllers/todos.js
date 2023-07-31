const ToDo = require('../models/todo');


module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  deleteOne
};


function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx, 1);
}

async function index(req, res) {
  const todos = await ToDo.find({});
  res.render('todos/index', {todos, title:'All Todos'}

)}

function show(req,res) {
  res.render('todos/show', {
    todo: ToDo.getOne(req.params.id),
    title: 'To-Do Details'
  });
}

 async function newTodo(req,res) {
  const todos = await ToDo.find({});
  res.render('todos/new', {
    title: 'New Todo',todos
  });
}

async function create(req,res) {
  const createTodo = await ToDo.create(req.body)
  console.log(req.body);
  try {
    await ToDo.create(req.body)
    res.redirect('/todos')
  }
  catch(error){
    console.log('error')

  }
    
  };

     async function deleteTodo(req,res){
     try{
      await ToDo.deleteOne({_id:req.params.id});
      console.log('here');
      res.redirect('/todos')
     }
     catch(err){
      console.log(err)
     }
      
     }
     
  


  















