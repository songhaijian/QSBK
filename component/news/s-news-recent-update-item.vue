<template>
	<view class="recent_update_item animated fadeInDown fast" @click="haneleItemClick">
		<view class="recent_update_item_left">
			<image :src="recentItem.titlepic" mode="aspectFill"></image>
		</view>
		<view class="recent_update_item_right">
			<view class="recent_update_item_right_line1">
				#{{recentItem.title}}#
			</view>
			<view class="recent_update_item_right_line2">
				{{recentItem.desc}}
			</view>
			<view class="recent_update_item_right_line3">
				<view class="news_num_wrap">
					动态{{recentItem.post_count}}
				</view>
				<view class="today_num_wrap">
					今日{{recentItem.todaypost_count}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			recentItem: Object,
			clickType: ""
		},
		methods: {
			haneleItemClick() {
				if (this.clickType == "publish") {
					uni.$emit("backPublish", this.recentItem)
					uni.navigateBack({
						delta: 1
					})
				} else {
					uni.navigateTo({
						url: "/pages/news/hot-sort-detail/hot-sort-detail?topicItem=" + JSON.stringify(this.recentItem)
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recent_update_item {
		padding: 20rpx 0;
		display: flex;
		border-bottom: 1rpx solid #eee;

		.recent_update_item_left {
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}

		.recent_update_item_right {
			margin-left: 20rpx;

			.recent_update_item_right_line1 {
				font-size: 30rpx;
			}

			.recent_update_item_right_line2 {
				color: #a4a4a4;
			}

			.recent_update_item_right_line3 {
				color: #a4a4a4;
				display: flex;

				.news_num_wrap {}

				.today_num_wrap {
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
