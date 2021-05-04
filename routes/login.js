const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
	res.render('login');
});
router.post('/', (req, res)=>{
	const name = req.body.name;
	console.log(name+" is log in");
	req.session.name = name;
	res.redirect('/');
});

module.exports = router;
