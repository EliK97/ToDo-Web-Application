const express = require('express');
var router = express.Router();

 
// All actual paths start with "/todos"
const categoryCtrl = require('../controllers/categories');

router.get('/',categoryCtrl.index);
router.get('/new',categoryCtrl.new);
router.get('/id',categoryCtrl.show);
router.post('/',categoryCtrl.create);
router.delete('/:id',categoryCtrl.delete);


module.exports = router;