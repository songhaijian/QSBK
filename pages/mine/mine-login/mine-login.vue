<template>
	<view>
		<uni-status-bar :bgColor="statuesColor"></uni-status-bar>
		<view class="top_bg_wrap">
			<image src="../../../static/commen/loginhead.png" mode="widthFix"></image>
			<view class="iconfont icon-guanbi" @click="handleClose">

			</view>
		</view>
		<view class="auth_code_login_wrap" v-if="!accountLogin">
			<view class="phone_wrap">
				+86
				<input type="text" placeholder="输入手机号" class="uni-input" />
			</view>
			<view class="auth_code_wrap">
				<input type="text" placeholder="请输入验证码" class="uni-input" />
				<button type="default">获取验证码</button>
			</view>
		</view>
		<view class="account_login_wrap" v-if="accountLogin">
			<view class="account_wrap">
				<input type="text" placeholder="输入手机号" class="uni-input" />
			</view>
			<view class="password_wrap">
				<input type="text" placeholder="请输入密码" class="uni-input" />
				<view>忘记密码?</view>
			</view>
		</view>
		<view class="switch_login_wrap" @click="handleSwitchLoginType">
			账号密码登录
			<view class="iconfont icon-jinru">

			</view>
		</view>
		<view class="login_hint">
			<view class="login_hint_divider">

			</view>
			第三方登录
			<view class="login_hint_divider">

			</view>
		</view>
		<s-mine-third-login></s-mine-third-login>
		<view class="agreement_wrap">
			注册即代表您同意
			<view class="aggrement">
				<<仿糗事百科用户协议>>
			</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../../../component/index/uni-status-bar.vue"
	import sMineThirdLogin from "../../../component/mine/s-mine-third-login.vue"
	export default {
		components: {
			uniStatusBar,
			sMineThirdLogin
		},
		data() {
			return {
				statuesColor: "#ffe933",
				accountLogin: false
			}
		},
		methods: {
			handleClose() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleSwitchLoginType() {
				this.accountLogin = !this.accountLogin
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_bg_wrap {
		position: relative;

		image {
			width: 100%;
		}

		.icon-guanbi {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
		}
	}

	.auth_code_login_wrap {
		padding: 0 20rpx;

		.phone_wrap {
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #eee;
			color: #333333;
			font-weight: bold;

			input {}
		}

		.auth_code_wrap {
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #eee;
			color: #333333;
			font-weight: bold;

			input {}

			button {
				font-weight: 400;
				background-color: #f4f4f4;
				font-size: 28rpx;
				color: #969696;
			}
		}
	}

	.account_login_wrap {
		padding: 0 20rpx;

		.account_wrap {
			border-bottom: 1rpx solid #eee;

			input {}
		}

		.password_wrap {
			border-bottom: 1rpx solid #eee;
			display: flex;

			input {
				margin-right: 150rpx;
			}

			view {
				width: 150rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.switch_login_wrap {
		margin: 20rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;

		.icon-jinru {
			color: #d5d5d5;
		}
	}

	.login_hint {
		margin: 20rpx 0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: #9c9c9c;
		margin: 0 20%;

		.login_hint_divider {
			width: 20%;
			height: 1rpx;
			background-color: #e4e4e4;
		}
	}

	.agreement_wrap {
		margin: 20rpx 0;
		display: flex;
		justify-content: center;
		color: #9e9e9e;

		.aggrement {
			color: #2caefc;
		}
	}
</style>
