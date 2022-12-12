var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log("Inside login router");
        res.render('login');
    }
    // find username and password, if username and password are same and not empty
        // show welcome page
    // else 
        // show login page with error

);

module.exports = router;
