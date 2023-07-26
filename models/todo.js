const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({   
  title: { type: String, required: true },
  description: String,
  dueDate: Date,  
}, {
  timestamps: true
});
  
module.exports = mongoose.model('ToDo',todoSchema);



