<template>
	<view class="paper_list_item_wrap" @click="handlePaperItemClick">
		<image :src="paperItem.headImg" mode="widthFix"></image>
		<view class="paper_list_item_right">
			<view class="paper_list_item_right_line1">
				<view class="paper_list_item_name">
					{{paperItem.nickName}}
				</view>
				<view class="paper_list_item_time">
					{{paperItem.time}}
				</view>
			</view>
			<view class="paper_list_item_right_line2">
				<view class="paper_list_item_desc">
					{{paperItem.desc}}
				</view>
				<view class="paper_list_item_unread_num">
					<uni-badge :text="paperItem.unReadCount" type="error" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../common/uni-badge.vue"
	export default {
		components: {
			uniBadge
		},
		props: {
			paperItem: Object
		},
		methods: {
			handlePaperItemClick() {
				uni.navigateTo({
					url:"/pages/paper/s-paper-chat/s-paper-chat"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paper_list_item_wrap {
		display: flex;
		margin: 0 20rpx;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			flex-shrink: 0;
		}

		.paper_list_item_right {
			margin-left: 20rpx;
			flex: 1;

			.paper_list_item_right_line1 {
				display: flex;
				justify-content: space-between;

				.paper_list_item_name {
					color: #010101;
					font-size: 30rpx;
				}

				.paper_list_item_time {
					color: #cbcbcb;
					font-size: 25rpx;
				}
			}

			.paper_list_item_right_line2 {
				display: flex;
				justify-content: space-between;

				.paper_list_item_desc {
					color: #999999;
					font-size: 25rpx;
					flex: 5;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
				}

				.paper_list_item_unread_num {
					flex: 1.5;
					display: flex;
					justify-content: center;
				}
			}
		}
	}
</style>
