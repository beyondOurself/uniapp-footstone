<template>
	<view class="riband_wrapp" :style="{'top':top+'rpx'}">
		<view class="riband_body" :class="{blueRiband:type == 'blue',greenRiband:type == 'green',orangeRiband:type == 'orange' }" >
			{{title}}
			<view class="riband_edge" :class="{blueRibandEdge:type == 'blue',greenRibandEdge:type == 'green',orangeRibandEdge:type == 'orange' }" >
			</view>
			<view class="riband_shadow_dege" :class="{blueRibandShadow:type == 'blue',greenRibandShadow:type == 'green',orangeRibandShadow:type == 'orange' }">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: ["title", "type","top"]
	}
</script>

<style>
	/* 丝带 start */

	.riband_wrapp {
		/* 距离父标签顶部的高度 */
		/* margin-top: 55rpx;
		margin-left: -10rpx; */
		display: inline-block;
		position: absolute;
		top: 40rpx;
		left: -10rpx;
	}

	.riband_body {
		display: inline-block;
		background-color: #4da2ff;
		color: #FFFFFF;
		font-size: 28rpx;
		/* padding: 5px; */
		padding: 0rpx 25rpx;
		height: 59rpx;
		line-height: 59rpx;
		text-align: center;
		position: relative;
		border: none;

	}

	.riband_edge {
		height: 0;
		width: 0;
		border-left: 50rpx solid #4da2ff;
		/* 宽度是父对象的 height 属性的一半 */
		border-top: 30rpx solid transparent;
		border-bottom: 30rpx solid transparent;
		position: absolute;
		/* 等同于三角形高 */
		right: -50rpx;
		top: 0rpx;
	}

	.riband_shadow_dege {
		height: 0;
		width: 0;
		border-bottom: solid 10rpx #136cd2;
		border-left: solid 10rpx transparent;
		position: absolute;
		top: -10rpx;
		left: 0rpx;
	}

	.blueRiband {
		background-color: #4da2ff;
	}

	.greenRiband {
		background-color: #7dc45a;
	}

	.orangeRiband {
		background-color: #feb05d;
	}
	
	.blueRibandEdge {
		border-left: 50rpx solid #4da2ff;
	}
	
	.greenRibandEdge {
		border-left: 50rpx solid #7dc45a;
	}
	
	.orangeRibandEdge {
		border-left: 50rpx solid #feb05d;
		
	}
	

	.blueRibandShadow {
		border-bottom: solid 10rpx #136cd2;
	}

	.greenRibandShadow {
		border-bottom: solid 10rpx #2f8508;
	}

	.orangeRibandShadow {
		border-bottom: solid 10rpx #dc7e1c;
	}



	/* 丝带 end */
</style>
