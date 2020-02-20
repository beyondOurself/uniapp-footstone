import fly from '../utils/httpRequest.js'



/* 
  author: longlong ,
  depict : 用户登录 ,
  params:{ username,password,uuid,clientId,version}
  method:POST
 */
export function login(params) {
	return fly.request('/login',
		params, {
			method: "post"
		}
	)
}
