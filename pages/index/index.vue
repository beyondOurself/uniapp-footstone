<template>
	<view class="page_block">
		<view class="background-block">

		</view>

		<view class="page_body">
			<view class="logo_block">
				<image class="image_banner" src="../../static/images/home/banner_1.jpg" mode=""></image>
			</view>
			<view class="news_block">
				<span class="news_state">最新</span><span class="news_title">我就是我是颜色不一样的烟花我就是我是颜色</span>
				<span class="news_more">更多</span>
			</view>
			<view class="action_block">
				<view class="">
					<view class="action_module_title">
						<span>流程应用</span>
					</view>
					<view class="action_module_content">
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
					</view>
				</view>
				<view class="">
					<view class="action_module_title">
						<span>日常办公</span>
					</view>
					<view class="action_module_content">
						<view class="action_entrance_single" style="color: #4CD964;">
							<navigator url="../office/today_watch/today_watch">
								<span class="iconfont icon-gongwendaiyue"></span><span>今日值班</span>
							</navigator>
						</view>
						<view class="action_entrance_single" style="color: #4CD964;">
							<navigator url="../test/test">
								<span class="iconfont icon-gongwendaiyue"></span><span>test</span>
							</navigator>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
					</view>
				</view>
				<view class="">
					<view class="action_module_title">
						<span>日常管理</span>
					</view>
					<view class="action_module_content">
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
						<view class="action_entrance_single">
							<span class="iconfont icon-gongwendaiyue"></span><span>待阅</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempNum: ''
			}
		},
		methods: {

		},
		onLoad() {
			if (!this.getGlobalUser()) {
				uni.redirectTo({
					url: "../login/login"
				})
			} else {
			}

		}
	}
</script>

<style>
	@import url("index.css");
</style>
