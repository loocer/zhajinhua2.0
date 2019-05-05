exports.authorize = function(req, res, next) {
	console.log(req.session)
  if (!req.session.user_id) {
  	let results = {}
  	results.status = 0
    results.msg = '请登录！'
   	res.status(401)
 	res.json(results)
  } else {
    next();
  }
}