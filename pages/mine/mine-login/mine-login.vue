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
				<input type="text" placeholder="输入手机号" class="uni-input" v-model="phoneNum" />
			</view>
			<view class="auth_code_wrap">
				<input type="text" placeholder="请输入验证码" class="uni-input" v-model="authCode" />
				<button type="default" @click="handleGetMegCode">{{codeTime?codeTime + "秒":"获取验证码"}}</button>
			</view>
		</view>
		<view class="account_login_wrap" v-if="accountLogin">
			<view class="account_wrap">
				<input type="text" placeholder="昵称/手机号/邮箱" class="uni-input" v-model="accountNum" />
			</view>
			<view class="password_wrap">
				<input type="text" placeholder="请输入密码" class="uni-input" v-model="pwdNum" />
				<view>忘记密码?</view>
			</view>
		</view>
		<button type="default" class="login_btn" :class="{btn_active:!btnDisable}" :disabled="!btnClick" @click="handleLogin">登录</button>
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
		<s-mine-third-login :providerList="providerList"></s-mine-third-login>
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
				accountLogin: false,
				codeTime: 0,
				btnDisable: true,
				btnClick: false,
				phoneNum: "",
				authCode: "",
				accountNum: "",
				pwdNum: "",
				providerList: []
			}
		},
		onLoad() {
			this.getLoginChannel()
		},
		methods: {
			handleClose() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleSwitchLoginType() {
				this.accountLogin = !this.accountLogin
				this.phoneNum = ""
				this.authCode = ""
				this.accountNum = ""
				this.pwdNum = ""
			},
			handleGetMegCode() {
				if (!this.isValidPhone()) {
					uni.showToast({
						title: "请输入合法的手机号",
						icon: "none"
					})
					return;
				}
				if (this.codeTime > 0) {
					return;
				}
				this.codeTime = 10
				var timer = setInterval(() => {
					this.codeTime--
					if (this.codeTime < 1) {
						clearInterval(timer)
					}
				}, 1000)
			},
			handleLogin() {
				console.log("dsfsdf")
			},
			isValidPhone() {
				if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) {
					return false
				} else {
					return true
				}
			},
			getLoginChannel() {
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						this.providerList = result.provider.map((value) => {
							let providerName = '';
							let icon = ''
							switch (value) {
								case 'weixin':
									providerName = '微信登录'
									icon = 'weixin'
									break;
								case 'qq':
									providerName = 'QQ登录'
									icon = 'QQ'
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录'
									icon = 'xinlangweibo'
									break;
							}
							return {
								name: providerName,
								id: value,
								loginIcon: icon
							}
						});
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
			}
		},
		watch: {
			phoneNum(val) {
				if (this.phoneNum && this.phoneNum != null && this.authCode && this.authCode != null) {
					this.btnDisable = false
					this.btnClick = true
				} else {
					this.btnDisable = true
					this.btnClick = false
				}
			},
			authCode(val) {
				if (this.phoneNum && this.phoneNum != null && this.authCode && this.authCode != null) {
					this.btnDisable = false
					this.btnClick = true
				} else {
					this.btnDisable = true
					this.btnClick = false
				}
			},
			accountNum(val) {
				if (this.accountNum && this.accountNum != null && this.pwdNum && this.pwdNum != null) {
					this.btnDisable = false
					this.btnClick = true
				} else {
					this.btnDisable = true
					this.btnClick = false
				}
			},
			pwdNum(val) {
				if (this.accountNum && this.accountNum != null && this.pwdNum && this.pwdNum != null) {
					this.btnDisable = false
					this.btnClick = true
				} else {
					this.btnDisable = true
					this.btnClick = false
				}
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

	.login_btn {
		margin: 20rpx;
		color: #909090;
	}

	.btn_active {
		background-color: #ffe933;
		color: #000;
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
