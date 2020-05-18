<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.utils.NetWork.on()
			this.userinfo.UserInfo.get()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./commen/iconfont.css");
	@import url("./commen/animate.css");
	@import url("./commen/uni.css");
	page{
		height: 100%;
	}
	::-webkit-scrollbar{
		display: none;
	}
</style>
