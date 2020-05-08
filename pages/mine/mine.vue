<template>
	<view>
		<view class="unlogin_wrap">
			<view class="unlogin_hint">
				登录仿糗百,体验更多功能
			</view>
			<view class="unlogin_logo_wrap">
				<view class="iconfont icon-weixin">

				</view>
				<view class="iconfont icon-QQ">

				</view>
				<view class="iconfont icon-xinlangweibo">

				</view>
			</view>
			<view class="unlogin_account_login_wrap">
				账号密码登录
				<view class="iconfont icon-jinru">

				</view>
			</view>
		</view>
		<view class="sort_wrap">
			<block v-for="(sortItem,sortIndex) in sortList" :key="sortIndex">
				<view class="sort_item">
					<view class="sort_count">
						{{sortItem.count}}
					</view>
					<view class="sort_name">
						{{sortItem.name}}
					</view>
				</view>
			</block>
		</view>
		<view class="banner_wrap">
			<image src="../../static/demo20.jpg" mode="widthFix"></image>
		</view>
		<view class="list_wrap">
			<block v-for="(listItem,listIndex) in listData" :key="listIndex">
				<view class="list_item_wrap">
					<view class="iconfont" :class="listItem.icon">

					</view>
					<view class="">
						{{listItem.title}}
					</view>
					<view class="iconfont icon-jinru">

					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
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
				listData: [{
						icon: "icon-liulan",
						iconColor: "",
						title: "浏览历史"
					},
					{
						icon: "icon-huiyuanvip",
						iconColor: "",
						title: "浏览历史"
					}
				]
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
	.unlogin_wrap {
		text-align: center;

		.unlogin_hint {}

		.unlogin_logo_wrap {
			display: flex;
			padding: 20rpx 80rpx;
			justify-content: space-evenly;

			.iconfont {
				font-size: 50rpx;
				color: #fff;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.icon-weixin {
				background-color: #2bd19b;
			}

			.icon-QQ {
				background-color: #2caefc;
			}

			.icon-xinlangweibo {
				background-color: #fc7729;
			}
		}

		.unlogin_account_login_wrap {
			display: flex;
			justify-content: center;
			align-items: center;

			.iconfont {
				color: #d5d5d5;
			}
		}
	}

	.sort_wrap {
		padding: 0 80rpx;
		display: flex;
		justify-content: center;

		.sort_item {
			flex: 1;
			text-align: center;

			.sort_count {
				color: #343434;
				font-size: 35rpx;
			}

			.sort_name {
				color: #989898;
				font-size: 30rpx;
			}
		}
	}

	.banner_wrap {
		padding: 20rpx;

		image {
			width: 100%;
			border-radius: 20rpx;
		}
	}
	.list_wrap{
		.list_item_wrap{
			display: flex;
		}
	}
	
</style>
