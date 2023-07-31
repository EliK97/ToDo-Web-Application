const express = require('express');
const router = express.Router();
const ensuredLoggedIn = require('../config/ensureLoggedIn')

 
// All actual paths start with "/todos"
const todosCtrl = require('../controllers/todos');

router.get('/',todosCtrl.index);
router.get('/new',ensuredLoggedIn,todosCtrl.new);
router.get('/id',todosCtrl.show);
router.post('/',todosCtrl.create);
router.delete('/:id',todosCtrl.delete);


module.exports = router;