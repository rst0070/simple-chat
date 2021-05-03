

function middleWare(req, res, next){
	let isGoingLogin = '/login' == req.path.substring(0,6);
	let isLogined = req.session.login;
	if(isGoingLogin || isLogined){
		next();
	}else{
		res.redirect('/login');
	}
}
module.exports = middleWare;
