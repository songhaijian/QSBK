<template>
	<view>
		<view class="chat_left_wrap">
			<image src="../../../static/userpic/11.jpg" mode="widthFix" lazy-load></image>
			<view class="chat_left_msg">
				上的飞机卢卡斯的积分看来就是打开链接发士大夫记录卡撒旦艰苦放了几颗螺丝
				<view class="chat_left_msg_arrow">
					
				</view>
			</view>
		</view>
		<s-paper-friend-bottom-chat @sendChat="handleSendChat"></s-paper-friend-bottom-chat>
	</view>
</template>

<script>
	import sPaperFriendBottomChat from "../../../component/paper/s-paper-friend-bottom-chat.vue"
	export default {
		components: {
			sPaperFriendBottomChat
		},
		data() {
			return {

			}
		},
		methods: {
			handleSendChat(value) {
				console.log(value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat_left_wrap{
		margin-left: 20rpx;
		display: flex;
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			flex-shrink: 0;
		}
		.chat_left_msg{
			display: flex;
			align-items: center;
			margin-left: 20rpx;
			background-color: #f4f4f4;
			position: relative;
			padding: 0 15rpx;
			border-radius: 10rpx;
			margin-right: 120rpx;
			.chat_left_msg_arrow::after{
				position: absolute;
				top: 25rpx;
				left: -30rpx;
				content: "";
				border: 15rpx solid #f4f4f4;
				border-color: transparent #f4f4f4 transparent transparent;
			}
		}
	}
</style>
