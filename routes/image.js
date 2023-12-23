var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('image.html', {root: 'public/pages'})
});
router.get('/list', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/new', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.put('/update', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.delete('/delete', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
