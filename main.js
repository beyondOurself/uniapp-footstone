import Vue from 'vue'
import App from './App'
import moment from "vue-moment"
import animated from 'animate.css'
import _ from 'lodash'
import * as constants from './constants/constants.js'
import * as api from './services/services.js'
import * as utils from './utils/utils.js'



Vue.use(moment);
Vue.use(animated);
//引入的第三方包定义的全局变量
Vue.prototype.$Moment = moment;
Vue.prototype._ = _;
// 自定义的全局变量
Vue.prototype.$api = api;
Vue.prototype._utils = utils;
Vue.prototype._serviceUrl = constants.SERVICE_URL;

// #ifdef APP-PLUS
Vue.prototype._deviceInfo = constants.DEVICE_INFO;
// #endif


Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
