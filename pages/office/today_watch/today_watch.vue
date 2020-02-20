<template page_bgcolor>

	<view class="tody_watch ">
		<uni-nav-bar status-bar="true" class="nav-body">
			<view class="nav_title">今日值班安排({{this.$moment(new Date()).format('YY-MM-DD')}})</view>
			<view slot="left" style="display: flex; align-items: center;">
				<uni-icon @tap="back" type="arrowleft" size="25" color="#0377ff" class="nav-left-ico"></uni-icon>
			</view>
		</uni-nav-bar>
		<view class="watch_list_block">
			<block v-for="(item,index) in watchers">
				<view class="watch_info_single animated bounceIn">
					<block v-if="index%3 == 0">
						<tom-riband :title="item.deptName" type="blue" top="30"></tom-riband>
					</block>
					<block v-else-if="index%3 == 1">
						<tom-riband :title="item.deptName" type="green" top="30"></tom-riband>
					</block>
					<block v-else="index%3 == 2">
						<tom-riband :title="item.deptName" type="orange" top="30"></tom-riband>
					</block>

					<view class="watch-info-content">
						<view class="blank-block">

						</view>
						<view class="watcher-wrapp">
							<view class="watcher-name">
								<span>{{item.userName}}</span><span>({{item.userNo}})</span>
							</view>
							<view class="watcher-tel">
								<view class="tel-long">
									<span class="tel-description">联系电话:</span><span class="tel-num">{{item.telPhone}}</span>
								</view>
								<view class="tel-short">
									<span class="tel-description">短号:</span><span class="tel-num">{{item.telShort}}</span>
								</view>
							</view>
						</view>
						<view class="wathcer-location-time">
							<view class="location-time-block">
								<view class="location-block">
									<span>{{item.workPlace}}</span>
								</view>
								<view class="time-block">
									<span>时间:</span><span>{{item.dutyTime}}</span>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	//引入的第三方组件
	import {
		uniIcon
	} from '@dcloudio/uni-ui'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"

	// 引入自定义组件
	import tomRiband from "../../../components/tom-riband/tom-riband.vue"
	export default {
		data() {
			return {
				watchers: []
			}
		},
		mounted() {

			uni.showLoading({
				title: "数据加载中...",
				mask: true
			})
			this.$api.getDutyList({})
				.then((res) => {
						if (res && res.list.length > 0) {
							this.watchers = res.list;
							 
						} else {
							uni.showToast({
								title: "暂无数据!"
							})
						}
						
						uni.hideLoading();

					}

				)
				.catch(function(error) {
					console.log(error);
				});
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		components: {
			uniNavBar,
			uniIcon,
			"tom-riband": tomRiband
		}
	}
</script>

<style class="scss">
	@import url("tody_watch.css");
</style>
