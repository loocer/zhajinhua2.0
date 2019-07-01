const getAuthorize = require('./auth').getAuthorize;
exports.authorize = function(req, res, next) {
	console.log(req)
  if (!req.headers.authorization) {
  	let results = {}
  	results.status = 0
    results.msg = '请登录！'
   	res.status(401)
 	res.json(results)
  } else {
  	let user = getAuthorize(req.headers.authorization)
  	console.log('222222222222')
  	console.log(user)
  	if(user){
  		next();
  	}else{
  		let results = {}
	  	results.status = 0
	    results.msg = '请登录！'
	   	res.status(401)
	 	res.json(results)
	 }
  }
}