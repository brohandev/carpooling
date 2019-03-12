var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('forms', { title: 'Carpooling' });
});

router.post('/', function(req, res, next) {
	res.redirect('/signup');
});

module.exports = router;
