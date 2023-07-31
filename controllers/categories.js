const Category = require('../models/categories');



module.exports = {
  index,
  show,
  new: newTask,
  create,
  delete: deleteCategory,
  deleteOne
};


function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = Category.findIndex(categories => categories.id === id);
  task.splice(idx, 1); 
}

async function index(req, res) {
  const findCater = await Category.find({});
  res.render('categories/index', {category:findCater}
)}

function show(req,res) {
  res.render('task/', {
    tasks: Category.getOne(req.params.id),
    title: 'To-Do Details'
  });
}

function newTask(req,res) {
  res.render('categories/new', {
    title: 'New Category'
  });
}

async function create(req,res) {
  console.log(req.body);
  try {
    await Category.create(req.body)
    res.redirect('/category')
  }
  catch(error){
    console.log(error)

  }
    
  };

     async function deleteCategory(req,res){
     try{
      await Category.deleteOne({_id:req.params.id});
      console.log('here');
      res.redirect('/category')
     }
     catch(err){
      console.log(err)
     }
      
     }
     
  


  















