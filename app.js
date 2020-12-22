require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
require('./configs/session.config')(app);



require('./configs/db.config');

//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//express set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.locals.title = 'Friendly Plant';

const usersRoute = require('./routes/users.route');
const plantsRoute = require('./routes/plants.routes');
const authRoute = require ('./routes/auth.routes')
app.use('/', usersRoute);
app.use('/', plantsRoute);
app.use('/', authRoute);


module.exports = app;



