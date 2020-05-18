const UserInfo = {
	userInfo: {},
	get() {
		uni.getStorage({
			key: "userinfo",
			complete: (res) => {
				if (res.data == null || res.data == '') {} else {
					this.userInfo = JSON.parse(res.data)
				}
			}
		})
	}
}
export default {
	UserInfo
}
