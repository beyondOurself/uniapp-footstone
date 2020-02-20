<template>
	<view class="content_block">
		<view class="company_ico">
			<image src="../../static/images/login/login_banner.png" mode="" class="login_image"></image>
		</view>
		<view class="form_wrapper">
			<form @submit="formSumit">
				<view class="input_wrapper">
					<span class="iconfont icon-ren1"></span>
					<input v-model="username" type="text" placeholder="请输入工号" placeholder-class="placeholder_form" class="input_primp" />
					<span class="iconfont icon-shanchu4"></span>
				</view>

				<view class="input_wrapper input_pwd">
					<span class="iconfont icon-password"></span>
					<input v-model="password" type="text" password="true" confirm-type="send" placeholder="请输入密码" placeholder-class="placeholder_form"
					 class="input_primp" />
					<span class="iconfont icon-SVG_yincangyanjing"></span>
				</view>
				<button class="button_submit animated rubberBand" type="primary" form-type="submit">登录</button>
			</form>
		</view>
		<view class="register_forget">
			<span>注册验证</span><span>忘记密码?</span>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				appVersion: '',
				username: '',
				password: ''
			}
		},
		mounted() {
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, (wgtInfo) => {
				this.appVersion = wgtInfo.version
			})
			// #endif

		},
		onLoad() {},
		methods: {
			formSumit() {

				uni.showLoading({
					title: '登录中...',
					mask: false
				});

				this.$api.login({
					"username": 'xxx',
					"password": 'xxx',
					// #ifdef APP-PLUS
					"uuid": this._deviceInfo.UUID,
					"clientId": this._deviceInfo.CLIENT_ID,
					"version": this.appVersion,
					// #endif

				}).then((data) => {
					console.log(data)
					if (data && data.code === 0) {
						uni.setStorageSync('globalUser', {
							departmentCode: data.departmentCode,
							departmentName: data.departmentCode,
							username: data.username,
							userId: data.userId,
							mail: data.mail,
							mobile: data.mobile,
							displayName: data.displayName,
							companyName: data.companyName,
							title: data.title,
							token: data.token,
							expire: data.expire,
						});
						uni.hideLoading();
						//进行页面的跳转
						uni.switchTab({
							url: '../index/index'
						});
					} else {
						uni.showToast({
							title: res.data.msg,
							mask: false
						})
					}

				}).catch(()=>{})
			}
		},
	}
</script>

<style>
	@import url("login.css");
</style>
