var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  console.log("Psss...");
  res.render('startP.pug');
});

module.exports = router;
