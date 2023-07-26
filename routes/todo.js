


const todosCtrl = require('../controllers/todo');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

router.get('/', todosCtrl.index);

router.get('/new', ensureLoggedIn, todosCtrl.new);

router.get('/:id', todosCtrl.show);

router.post('/',todosCtrl.create);

router.delete('/:id', todosCtrl.delete);

router.post('/', ensureLoggedIn, todoCtrl.create);
	
module.exports = router;
