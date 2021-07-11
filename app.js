const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const {verifyUser, verifyAdmin} = require('./middlewares/authSession');



dotenv.config();
const index = require('./routes/index');
const signin = require('./routes/signin');
const signup = require('./routes/signup');
const travels = require('./routes/travels');
const admin = require('./routes/admin');
const products = require('./routes/admin/products');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '123',
  cookie: {maxAge: null},
  resave: true,
  saveUninitialized: false
}))

app.use('/', index);
app.use('/signin', signin);
app.use('/signup', signup);
app.use('/travels', verifyUser, travels);
app.use('/admin', verifyAdmin, admin);
app.use('/admin/products', products);

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
