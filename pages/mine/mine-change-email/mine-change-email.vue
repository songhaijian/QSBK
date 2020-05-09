<template>
	<view class="change_pwd_wrap">
		<input type="text" placeholder="输入你要绑定的邮箱" class="uni-input" v-model="email" />
		<input type="text" placeholder="请输入密码" class="uni-input" v-model="pwd" password="true" />
		<button type="default" class="btn_enable" :class="{btn_disable:btnIsDisable}" :disabled="btnIsDisable" @click="handleConfirm"
		 :loading="loading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnIsDisable: true,
				email: "",
				pwd: "",
				loading: false
			}
		},
		watch: {
			email(val) {
				if (this.inputIsEmpty()) {
					this.btnIsDisable = true
				} else {
					this.btnIsDisable = false
				}
			},
			pwd(val) {
				if (this.inputIsEmpty()) {
					this.btnIsDisable = true
				} else {
					this.btnIsDisable = false
				}
			}
		},
		methods: {
			handleConfirm() {
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
				if (!ePattern.test(this.email)) {
					uni.showToast({
						title: "邮箱格式不正确"
					})
					return;
				}
				if (!this.inputIsEmpty()) {
					this.loading = true
					this.btnIsDisable = true
					uni.showToast({
						title: "修改成功"
					})
				}
			},
			inputIsEmpty() {

				if (this.email && this.email != null && this.pwd && this.pwd != null) {
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
