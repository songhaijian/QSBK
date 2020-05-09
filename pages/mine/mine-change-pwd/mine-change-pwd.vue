<template>
	<view class="change_pwd_wrap">
		<input type="password" placeholder="输入旧密码" class="uni-input" v-model="oldPwd" />
		<input type="password" placeholder="输入新密码" class="uni-input" v-model="newPwd" />
		<input type="password" placeholder="输入确认密码" class="uni-input" v-model="newConfirmPwd" />
		<button type="default" class="btn_enable" :class="{btn_disable:btnIsDisable}" :disabled="btnIsDisable" @click="handleConfirm"
		 :loading="loading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnIsDisable: true,
				oldPwd: "",
				newPwd: "",
				newConfirmPwd: "",
				loading: false
			}
		},
		watch: {
			oldPwd(val) {
				if (this.inputIsEmpty()) {
					this.btnIsDisable = true
				} else {
					this.btnIsDisable = false
				}
			},
			newPwd(val) {
				if (this.inputIsEmpty()) {
					this.btnIsDisable = true
				} else {
					this.btnIsDisable = false
				}
			},
			newConfirmPwd(val) {
				if (this.inputIsEmpty()) {
					this.btnIsDisable = true
				} else {
					this.btnIsDisable = false
				}
			}
		},
		methods: {
			handleConfirm() {
				if (!this.inputIsEmpty() && this.newPwd == this.newConfirmPwd) {
					this.loading = true
					this.btnIsDisable = true
					uni.showToast({
						title: "修改成功"
					})
				} else {
					uni.showToast({
						title: "两次新密码不一致",
						icon: "none"
					})
				}
			},
			inputIsEmpty() {

				if (this.oldPwd && this.oldPwd != null && this.newPwd && this.newPwd != null && this.newConfirmPwd && this.newConfirmPwd !=
					null) {
					return false;
				}
				return true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.change_pwd_wrap {
		input {
			border-bottom: 1rpx solid #EEEEEE;
		}

		button {
			margin: 20rpx 40rpx;
		}

		.btn_enable {
			background-color: #ffe933;
			color: #000000;
			font-size: 35rpx;
		}

		.btn_disable {
			background-color: #f4f4f4;
			color: #909090;
			font-size: 35rpx;
		}
	}
</style>
