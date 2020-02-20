<template>
	<view>
		 <button type="primary" @click="test">使用ajax请求</button>
		 <textarea :value="mockShow" placeholder="" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mockShow:''
			}
		},
		methods: {
			test(){
				 console.log("start...")
				 this.$api.mockReqTest().then((data) => { 
					 this.mockShow  = JSON.stringify(data) 
					 console.log('return datas',data)}).catch()
				 console.log("end...")
			}
		}
	}
</script>

<style>

</style>
