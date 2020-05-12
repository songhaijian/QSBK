const NetWork = {
	isConnect: false,
	on() {
		//获取当前网络状态
		uni.getNetworkType({
			success: (res) => {
				if (res.networkType != 'none') {
					this.isConnect = true;
					return;
				}
				uni.showToast({
					title: "请先连接网络",
					icon: "none"
				})
			}
		})
		uni.onNetworkStatusChange((res) => {
			this.isConnect = res.isConnected
			if (!res.isConnected) {
				uni.showToast({
					title: "网络已断开",
					icon: "none"
				})
			}
		})
	}
}
export default {
	NetWork
}
