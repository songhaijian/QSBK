<template>
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
		<view class="unlogin_account_login_wrap" @click="handleLogin">
			账号密码登录
			<view class="iconfont icon-jinru">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			handleLogin() {
				uni.navigateTo({
					url:"/pages/mine/mine-login/mine-login" 
				})
			}
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
</style>
