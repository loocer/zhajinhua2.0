const jwt = require('jsonwebtoken')
const fs = require('fs')

// 获取签发 JWT 时需要用的密钥
const privateKey = fs.readFileSync('./req/tools/config/private.key')
const cert = fs.readFileSync('./req/tools/config/public.key'); 

exports.authorize = (user)=>{
	return jwt.sign({id:user.id}, privateKey, { algorithm: 'RS256' })
}	
exports.getAuthorize =(token)=>{
 	return jwt.verify(token, cert,(err,decoded)=>{
 		console.log('fdecoded')
 		console.log(decoded)
    	if(err || !decoded){
    		return false
    	}else{
    		return decoded
    	}
    });	
}
   
// Token 数据
// const payload = {
//   name: 'wanghao',
//   admin: true
// }

// // 密钥
// const secret = 'ILOVENINGHAO'

// // 签发 Token
// const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })
