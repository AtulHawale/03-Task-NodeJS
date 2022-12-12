var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/login', indexRouter);
app.use('/invoice', usersRouter);
app.use('/',loginRouter);

app.post("/login", (req, res)=>{
  console.log("in post, doing login")
  console.log(req.body)
  if(!!req.body.user && req.body.user===req.body.pass){
      res.render("index")
  } else {
      res.render("login", {errorMessage: "Something bad happenned"});
  }
  // find username and password, if username and password are same and not empty
      // show welcome page
  // else 
      // show login page with error
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
