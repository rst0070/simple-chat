const auth = require('./routes/auth.js');
const login = require('./routes/login.js');
const chat = require('./routes/chat.js');
const express = require('express');
const app = express();

const logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(logger('dev'));

app.use(session({
	secret: '12345',
	maxAge: 3600000
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(auth);
app.use('/login',login);
app.use('/',chat);

app.listen(3000, ()=>{
	console.log('server start.. 3000');
});
