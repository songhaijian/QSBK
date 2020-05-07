<template>
	<view class="bottom_input_wrap">
		<input type="text" placeholder="文明发言" v-model="inputText" />
		<view class="iconfont icon-fabu" @click="handleSendChat">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputText: ""
			}
		},
		methods: {
			handleSendChat() {
				this.$emit('sendChat', this.inputText)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom_input_wrap {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 20rpx 0;
		border-top: 1rpx solid #EEEEEE;
		display: flex;
		background-color: #fff;

		input {
			margin-left: 20rpx;
			flex: 1;
			background-color: #f7f7f7;
			border-radius: 10rpx;
			font-size: 30rpx;
			padding: 10rpx;
		}

		.icon-fabu {
			width: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
