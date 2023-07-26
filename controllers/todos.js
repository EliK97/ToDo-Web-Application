const ToDo = require('../models/todo');


module.exports = {
  index,
};

async function index(req, res) {
  const todos = await ToDo.find({});
  res.render('todos/index', {todos}
)}












