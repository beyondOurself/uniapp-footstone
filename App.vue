<script>
	
	export default {
		onLaunch: function() {
			//清除掉用户的缓存数据,需要重新登录 
		    try {
		        uni.removeStorageSync('globalUser');
		    } catch (e) {
		        // error
				console.error("清除用户缓存数据失败!")
		    }
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>  
/* 引入全局字体图标 */
@import url("./common/iconfont_ttf.css");	

/* 初始化全局样式 */
body {
	 color: #333333;
}

</style>
