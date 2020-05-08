<template>
	<view>
		<s-mine-unlogin v-if="!isLogin"></s-mine-unlogin>
		<s-mine-login v-if="isLogin"></s-mine-login>
		<view class="sort_wrap">
			<block v-for="(sortItem,sortIndex) in sortList" :key="sortIndex">
				<s-mine-sort-item :sortItem="sortItem"></s-mine-sort-item>
			</block>
		</view>
		<view class="banner_wrap">
			<image src="../../static/demo20.jpg" mode="widthFix"></image>
		</view>
		<view class="list_wrap">
			<block v-for="(listItem,listIndex) in isLogin?loginListData:unLoginListData" :key="listIndex">
				<s-mine-list-item :listItem="listItem"></s-mine-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import sMineSortItem from "../../component/mine/s-mine-sort-item.vue"
	import sMineListItem from "../../component/mine/s-mine-list-item.vue"
	import sMineUnlogin from "../../component/mine/s-mine-unlogin.vue"
	import sMineLogin from "../../component/mine/s-mine-login.vue"
	export default {
		components: {
			sMineSortItem,
			sMineListItem,
			sMineUnlogin,
			sMineLogin
		},
		data() {
			return {
				sortList: [{
					name: "糗事",
					count: 0
				}, {
					name: "动态",
					count: 0
				}, {
					name: "评论",
					count: 0
				}, {
					name: "收藏",
					count: 0
				}],
				unLoginListData: [{
						icon: "icon-liulan",
						iconColor: "#44b3ff",
						title: "浏览历史"
					},
					{
						icon: "icon-huiyuanvip",
						iconColor: "#ff7434",
						title: "糗百认证"
					}
				],
				loginListData: [{
						icon: "icon-liulan",
						iconColor: "#44b3ff",
						title: "浏览历史"
					},
					{
						icon: "icon-huiyuanvip",
						iconColor: "#ff7434",
						title: "糗百认证"
					},
					{
						icon: "icon-icon_im_keyboard",
						iconColor: "#44b3ff",
						title: "审核糗事"
					}
				],
				isLogin: false
			}
		},
		methods: {

		},
		onNavigationBarButtonTap(e) {
			console.log(e.index)
		}
	}
</script>

<style lang="scss" scoped>
	.sort_wrap {
		padding: 0 80rpx;
		display: flex;
		justify-content: center;
	}

	.banner_wrap {
		padding: 20rpx;

		image {
			width: 100%;
			border-radius: 20rpx;
		}
	}

	.list_wrap {
		margin: 0 20rpx;
		border-top: 1rpx solid #EEEEEE;
	}
</style>
