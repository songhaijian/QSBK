<template>
	<view class="topic_detail_wrap">
		<view class="top_bg_wrap">
			<image :src="topicDetailObj.imagePath" mode="aspectFill"></image>
		</view>
		<view class="info_wrap">
			<view class="info_line1">
				<image :src="topicDetailObj.imagePath" mode="widthFix"></image>
				<view class="info_line1_title">
					#{{topicDetailObj.title}}#
				</view>
			</view>
			<view class="info_line2">
				<view class="news_num_wrap">
					动态{{topicDetailObj.newsNum}}
				</view>
				<view class="today_num_wrap">
					今日{{topicDetailObj.todayNum}}
				</view>
			</view>
			<view class="info_line3">
				{{topicDetailObj.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			topicDetailObj: Object
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
