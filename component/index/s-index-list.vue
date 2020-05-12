<template>
	<view v-if="itemData.tag=='video'" class="item_wrap animated fadeInDown fast" @click="handleItemClick">
		<view class="item_line1">
			<view class="line1_left">
				<image :src="itemData.user.thumb" mode="widthFix" lazy-load=""></image>
				<view class="user_wrap">
					<view class="name_wrap">
						<view class="nickname">
							{{itemData.user.login}}
						</view>
						<image v-if="itemData.user.titles != null" :src="itemData.user.titles[0].icon" mode="widthFix"></image>
					</view>
					<view v-if="itemData.user.talents != null" class="user_tag">
						{{itemData.user.talents[0].cmd_desc}}
					</view>
				</view>
			</view>

			<view class="attention">
				+&nbsp;关注
			</view>
		</view>
		<view class="item_line2">
			{{itemData.content}}
		</view>
		<view class="item_line3">
			<image :src="itemData.share_url" mode="widthFix"></image>
		</view>
		<view class="item_line4">
			<view class="left_wrap iconfont icon-icon_xiaolian-mian">
				<view class="like_num">
					1234
				</view>
				<view class="hate_num iconfont icon-kulian">

				</view>
			</view>
			<view class="right_wrap">
				<view class="iconfont icon-pinglun1">

				</view>
				<view class="comment_num">
					{{itemData.comments_count}}
				</view>
				<view class="iconfont icon-zhuanfa">

				</view>
				<view class="share_num ">
					{{itemData.share_count}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		mounted() {

		},
		props: {
			itemData: Object
		},
		methods: {
			handleItemClick() {
				uni.navigateTo({
					url: "../../pages/index/index-detail/index-detail?indexItem=" + JSON.stringify(this.itemData)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item_wrap {
		padding: 20rpx;
		border-bottom: 1rpx solid #eeeeee;

		.item_line1 {
			padding: 20rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.line1_left {
				display: flex;

				image {
					will-change: transform;
					width: 80rpx;
					height: 80rpxx;
					border-radius: 50%;
				}

				.user_wrap {
					margin-left: 20rpx;

					.name_wrap {
						display: flex;
						justify-content: center;
						align-items: center;

						.nickname {
							font-size: 30rpx;
							color: #a5a5a5;
						}

						image {
							will-change: transform;
							margin-left: 10rpx;
							width: 30rpx;
							height: 30rpx;
						}
					}

					.user_tag {
						font-size: 20rpx;
						color: #d7d7d7;
					}
				}
			}


			.attention {
				border-radius: 20rpx;
				padding: 5rpx 20rpx;
				background-color: #f4f4f4;
				font-size: 25rpx;
				color: #010101;
			}
		}

		.item_line2 {
			padding-bottom: 20rpx;
			font-size: 35rpx;
			color: #000;
		}

		.item_line3 {
			image {
				width: 100%;
				will-change: transform;
			}
		}

		.item_line4 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #d5d5d5;

			.left_wrap {
				display: flex;
				align-items: center;

				.like_num {
					margin: 0 10rpx;
					font-size: 25rpx;
				}

				.hate_num {}
			}

			.right_wrap {
				display: flex;
				align-items: center;

				.comment_num {
					margin: 0 10rpx;
					font-size: 25rpx;
				}

				.share_num {
					margin: 0 10rpx;
					font-size: 25rpx;
				}
			}
		}
	}
</style>
