require('dotenv').config();
require('./config/database')

 const ToDo = require('./models/todo');

 let todo = await ToDo.find({})
 console.log(todo);