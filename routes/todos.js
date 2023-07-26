const express = require('express');
const router = express.Router();

 
// All actual paths start with "/todos"
const todosCtrl = require('../controllers/todos');

router.get('/',todosCtrl.index);

module.exports = router;