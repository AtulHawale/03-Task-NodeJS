var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name/:price', function(req, res, next) {
  console.log("req body data",req.params.price)
  var d = new Date();
  res.render('invoice',{itemname:req.params.name,date:d,itemprice:req.params.price})
});

module.exports = router;
