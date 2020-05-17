<template>
	<view class="comment_item_wrap" :class="{apply_comment_wrap:commentItem.fid>0}" @click="handleClickUser">
		<image :src="commentItem.user.userpic" mode="aspectFill"></image>
		<view class="comment_item_right_wrap">
			<view class="comment_item_line1">
				{{commentItem.user.username}}
			</view>
			<view class="comment_item_line2">
				{{commentItem.data}}
			</view>
			<view class="comment_item_line3">
				{{formatTime}}
			</view>
		</view>
	</view>
</template>

<script>
	import timeUtils from "../../commen/time.js"
	export default {
		props: {
			commentItem: Object
		},
		computed: {
			formatTime() {
				return timeUtils.gettime.gettime(this.commentItem.create_time)
			}
		},
		methods: {
			handleClickUser() {
				this.$emit("handleClickUser", this.commentItem.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment_item_wrap {
		margin-top: 20rpx;
		display: flex;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			flex-shrink: 0;
		}

		.comment_item_right_wrap {
			margin-left: 20rpx;

			.comment_item_line1 {
				color: #24a3d9;
			}

			.comment_item_line2 {
				color: #000000;
			}

			.comment_item_line3 {
				color: #787878;
			}
		}
	}

	.apply_comment_wrap {
		margin-top: 0;
		margin-left: 100rpx;
		background-color: #f4f4f4;
		padding: 20rpx;
	}
</style>
