const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todo');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

router.get('/', todoCtrl.index);

router.get('/new', ensureLoggedIn, todoCtrl.new);

router.get('/:id', moviesCtrl.show);

router.post('/', ensureLoggedIn, todoCtrl.create);
	
module.exports = router;
