<template>
	<view class="seeting_wrap">
		<block v-for="(seetingItem,seetingIndex) in seetingList">
			<s-mine-list-item :listItem="seetingItem"></s-mine-list-item>
		</block>

		<button type="default" @click="handleLogout">退出登录</button>
	</view>
</template>

<script>
	import sMineListItem from "../../../component/mine/s-mine-list-item.vue"
	export default {
		components: {
			sMineListItem
		},
		data() {
			return {
				seetingList: [{
						icon: "",
						iconColor: "",
						title: "账号与安全",
						navigatorType: "navigatorTo",
						navigatorUrl: "/pages/mine/mine-change-pwd/mine-change-pwd"
					},
					{
						icon: "",
						iconColor: "",
						title: "绑定邮箱",
						navigatorType: "navigatorTo",
						navigatorUrl: "/pages/mine/mine-change-email/mine-change-email"
					},
					{
						icon: "",
						iconColor: "",
						title: "资料编辑",
						navigatorType: "navigatorTo",
						navigatorUrl: "/pages/mine/mine-change-userinfo/mine-change-userinfo"
					},
					{
						icon: "",
						iconColor: "",
						title: "小纸条"
					},
					{
						icon: "",
						iconColor: "",
						title: "清除缓存",
						navigatorType: "clear",
						navigatorUrl: ""
					},
					{
						icon: "",
						iconColor: "",
						title: "意见反馈",
						navigatorType: "navigatorTo",
						navigatorUrl: "/pages/mine/mine-feedback/mine-feedback"
					},
					{
						icon: "",
						iconColor: "",
						title: "关于仿糗百",
						navigatorType: "navigatorTo",
						navigatorUrl: "/pages/mine/mine-about/mine-about"
					}
				]
			}
		},
		methods: {
			handleLogout() {
				uni.clearStorage()
				uni.showToast({
					title: "清除成功",
					icon: "none"
				})
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.seeting_wrap {
		border-top: 1rpx solid #EEEEEE;

		button {
			background-color: #ffe933;
			font-size: 35rpx;
			margin: 20rpx 40rpx;
			color: #000000;
		}
	}
</style>
