<template>
	<view class="chat_wrap">
		<view v-if="chatItem.newTime" class="chat_time">
			{{chatItem.newTime}}
		</view>
		<template v-if="!chatItem.isMe">
			<view class="chat_left_wrap">
				<view class="chat_left_head_img">
					<image :src="chatItem.headImg" mode="widthFix" lazy-load></image>
				</view>
				<view class="chat_left_msg">
					<view v-if="chatItem.msgType=='text'" class="chat_left_text">
						{{chatItem.textMsg}}
					</view>
					<view v-if="chatItem.msgType=='img'" class="chat_left_img">
						<image :src="chatItem.imgMsg" mode="widthFix"></image>
					</view>
					<view class="chat_left_msg_arrow">

					</view>
				</view>
			</view>
		</template>
		<template v-else-if="chatItem.isMe">
			<view class="chat_right_wrap">

				<view class="chat_right_msg">
					<view v-if="chatItem.msgType=='text'" class="chat_right_text">
						{{chatItem.textMsg}}
					</view>
					<view v-if="chatItem.msgType=='img'" class="chat_right_img">
						<image :src="chatItem.imgMsg" mode="widthFix"></image>
					</view>
					<view class="chat_right_msg_arrow">

					</view>
				</view>
				<view class="chat_right_head_img">
					<image :src="chatItem.headImg" mode="widthFix" lazy-load></image>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			chatItem: Object
		}
	}
</script>

<style lang="scss">
	.chat_wrap {
		margin-top: 20rpx;
		.chat_time {
			display: flex;
			justify-content: center;
			color: #a4a4a4;
		}

		.chat_left_wrap {
			margin-left: 20rpx;
			display: flex;

			.chat_left_head_img {
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					flex-shrink: 0;
				}
			}

			.chat_left_msg {
				display: flex;
				align-items: center;
				margin-left: 20rpx;
				background-color: #f4f4f4;
				position: relative;
				padding: 0 15rpx;
				border-radius: 10rpx;
				margin-right: 120rpx;

				.chat_left_img {
					margin: 15rpx 0;
					display: flex;
					align-items: center;

					image {
						max-width: 250rpx;
						max-height: 150rpx;
					}
				}

				.chat_left_msg_arrow::after {
					position: absolute;
					top: 25rpx;
					left: -30rpx;
					content: "";
					border: 15rpx solid #f4f4f4;
					border-color: transparent #f4f4f4 transparent transparent;
				}
			}
		}

		.chat_right_wrap {
			margin-right: 20rpx;
			display: flex;
			justify-content: flex-end;

			.chat_right_head_img {
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					flex-shrink: 0;
				}
			}

			.chat_right_msg {
				display: flex;
				align-items: center;
				margin-left: 120rpx;
				background-color: #f4f4f4;
				position: relative;
				padding: 0 15rpx;
				border-radius: 10rpx;
				margin-right: 20rpx;

				.chat_right_img {
					margin: 15rpx 0;
					display: flex;
					align-items: center;

					image {
						max-width: 250rpx;
						max-height: 150rpx;
					}
				}

				.chat_right_msg_arrow::after {
					position: absolute;
					top: 25rpx;
					right: -30rpx;
					content: "";
					border: 15rpx solid #f4f4f4;
					border-color: transparent transparent transparent #f4f4f4;
				}
			}
		}
	}
</style>
