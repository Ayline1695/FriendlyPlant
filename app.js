require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
// const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();

// require database configuration
require('./configs/db.config');

// Middleware Setup
app.use(logger('dev'));

// Access POST params with body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// partial
hbs.registerPartials(`${__dirname}/views/partials/`);

// Session middleware
app.use(
  session({
    secret: "FriendlyPlantSecret",
    // cookie: { maxAge: 3600000 * 1 },	// 1 hour
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 7 // Time to live - 7 days (14 days - Default)
    })
  })
);
app.use(cookieParser());

// locals
app.use(function (req, res, next) {
  res.locals.currentUser = req.session.currentUser;
  next();
})

// Routes
 const indexRouter = require('./routes/index.route');
// const usersRouter = require('./routes/users.route');
 const plantsRouter = require('./routes/plants.route');
 const authRouter = require('./routes/auth.route');
 app.use('/', indexRouter);
// app.use('/', usersRouter);
 app.use('/', authRouter);
 app.use('/', plantsRouter);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


app.listen(process.env.PORT, () => console.log("server running on port 4000"));