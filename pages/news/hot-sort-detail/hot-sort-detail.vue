<template>
	<view class="topic_detail_wrap">
		<view class="top_bg_wrap">
			<image src="../../../static/topicpic/11.jpeg" mode="aspectFill"></image>
		</view>
		<view class="info_wrap">
			<view class="info_line1">
				<image src="../../../static/topicpic/11.jpeg" mode="widthFix"></image>
				<view class="info_line1_title">
					#忆往事,敬余生#
				</view>
			</view>
			<view class="info_line2">
				<view class="news_num_wrap">
					动态123
				</view>
				<view class="today_num_wrap">
					今日456
				</view>
			</view>
			<view class="info_line3">
				面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.topic_detail_wrap {
		.top_bg_wrap {
			width: 100%;
			height: 300rpx;
			overflow: hidden;
			image {
				width: 100%;
				filter: blur(10px);
			}
		}

		.info_wrap {
			padding: 20rpx;
			.info_line1 {
				display: flex;
				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 10rpx;
					margin-top: -95rpx;
				}

				.info_line1_title {
					margin-left: 20rpx;
					color: #000000;
					font-size: 35rpx;
				}
			}

			.info_line2 {
				margin-top: 10rpx;
				display: flex;
				color: #cdcdcd;
				font-size: 25rpx;
				.news_num_wrap {
					margin-right: 10rpx;
				}

				.today_num_wrap {}
			}

			.info_line3 {
				color: #a3a3a3;
				font-size: 30rpx;
			}
		}
	}
</style>
