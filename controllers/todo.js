const todos = require('../models/todo');


module.exports = {
  index,
  

  create,
  delete: deleteTask
};

async function index(req, res) {
  const todos = await ToDo.find({});
  res.render('todos/index', { title: 'Todays Agenda', todos });
}




function newTask(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('todos/new', { title: 'Add Task', errorMsg: '' });
}


async function deleteTask(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const todos = await todos.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!todos) return res.redirect('/todos');
  // Remove the review using the remove method available on Mongoose arrays
  todos.reviews.remove(req.params.id);
  // Save the updated movie doc
  await todos.save();
  // Redirect back to the movie's show view
  res.redirect(`/todos/${todos._id}`);
}



async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new movie
    const newTodo = await todos.create(req.body);
    // Redirect  
    res.redirect(`/todos/${todos._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('todos/new', { errorMsg: err.message });
  }
}

