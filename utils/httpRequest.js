import {
	SERVICE_URL
} from '../constants/constants.js'
import * as mockServer from '../mock/mockServer.js'

var Fly = require("flyio/dist/npm/wx")
var fly = new Fly

//定义公共headers
fly.config.headers = {
	'content-type': 'application/x-www-form-urlencoded'
}
//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = SERVICE_URL; //  "http://191.1.9.240:8077/greatoo-oa/app/"

// 添加请求拦截器
fly.interceptors.request.use((request) => {
		
		console.log(request.url)
		//对mock数据
		let reqResult = mockServer.resMockDatas(request.url);
		if(reqResult.mockFlag){
		  return Promise.resolve(reqResult.data)
		}

		//设置token
		let token = uni.getStorageSync('globalUser').token;
		if (token) {
			request.headers['token'] = token
		}
		return request
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	})

// 添加响应拦截器
fly.interceptors.response.use((res) => {


	uni.hideLoading();
	uni.hideToast();
	// 对响应数据做些事
	if (!res.data) {
		return Promise.reject(res)
	}
	return res
}, (error) => {
	uni.hideLoading();
	uni.hideToast();
	return Promise.reject(error)
})

export default fly
