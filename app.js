const auth = require('./routes/auth.js');
const login = require('./routes/login.js');
const chat = require('./routes/chat.js');
const express = require('express');
const app = express();
const session = require('express-session');


//app.use
app.use(session({
	secret: '12345',
	maxAge: 3600000
});

app.use(auth);

app.use(chat);

app.listen(3000, ()=>{
	console.log('server start.. 3000');
});
