const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('main', {name:req.session.name});
});
module.exports = router;
