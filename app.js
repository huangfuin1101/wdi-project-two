const express = require('express');
const app = express();
// const handMade = require('./db/data');
// // const port = 4000;
// const Handmade = require('./models/handmade');
const session = require( 'express-session');
const mongoose = require('mongoose');
const env = require('./config/environment');
const auth = require('./lib/auth');
const router = require('./config/routes');
const methodOverride = require('method-override');
// mongoose.connect('mongodb://localhost/handmades');
mongoose.connect(env.dbUri);


// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));
// Set up ejs as the view engine of Express
const expressEjsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');   //Express knows that views are written in ejs
app.use(expressEjsLayouts);
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('*', auth.checkAuthStatus);
app.use(router);










app.listen(env.port, () => console.log(`Listening changes for port ${env.port}`));
