<template>
	<view class="commen_list">
		<view class="head_img_wrap">
			<image :src="item.userPic" mode="widthFix"></image>
		</view>
		<view class="item_right_wrap">
			<view class="item_line1">
				<view class="nickname_wrap">
					<view class="nickname">
						{{item.userName}}
					</view>
					<view class="sex_age_wrap">
						<view class="iconfont" :class="[item.sex==0?'icon-nan':'icon-nv']">

						</view>
						{{item.age}}
					</view>

				</view>
				<view v-if="!isAttention" class="attention_wrap" @click="handleAddAttention">
					<view class="attention">
						+&nbsp;关注
					</view>
					<view class="iconfont icon-guanbi">

					</view>
				</view>
			</view>
			<view class="item_line2">
				{{item.title}}
			</view>
			<view class="item_line3">
				<image v-if="item.titlePic" :src="item.titlePic" mode="widthFix"></image>
				<template v-if="item.video">
					<view class="iconfont icon-bofang">

					</view>
					<view class="play_num_wrap">
						{{item.video.playNum}}{{item.video.videoTime}}
					</view>
				</template>

			</view>
			<view v-if="item.share" class="item_line3_share">
				<image :src="item.share.shareImg" mode=""></image>
				<view class="share_text_wrap">
					{{item.share.shareTitle}}
				</view>
			</view>
			<view class="item_line4">
				<view class="address_wrap">
					{{item.path}}
				</view>
				<view class="share_and_commen_wrap">
					<view class="iconfont icon-zhuanfa">
						{{item.shareNum}}
					</view>
					<view class="iconfont icon-pinglun1">
						{{item.commentNum}}
					</view>
					<view class="iconfont icon-dianzan">
						{{item.favNum}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		data() {
			return {
				isAttention: this.item.isAttention
			}
		},
		methods: {
			handleAddAttention() {
				this.isAttention = true
				uni.showToast({
					title: "关注成功"
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.commen_list {
		padding: 10rpx 20rpx;
		display: flex;

		.head_img_wrap {
			flex-shrink: 0;

			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
		}

		.item_right_wrap {
			margin-left: 10rpx;
			border-bottom: 2rpx solid #eeeeee;
			flex: 1;

			.item_line1 {
				display: flex;
				justify-content: space-between;

				.nickname_wrap {
					margin: 10rpx 0;
					display: flex;
					align-items: center;

					.nickname {
						color: #999999;
					}

					.sex_age_wrap {
						margin-left: 10rpx;
						padding: 0 15rpx;
						height: 40rpx;
						display: flex;
						align-items: center;
						background-color: #44b3ff;
						border-radius: 20rpx;
						color: #fff;

						.icon-nan {
							font-size: 25rpx;
						}
						.icon-nv{
							font-size: 25rpx;
						}
					}
				}

				.attention_wrap {
					display: flex;
					align-items: center;

					.attention {
						background-color: #f4f4f4;
						padding: 0 10rpx;
						border-radius: 10rpx;
						margin-right: 10rpx;
					}

					.icon-guanbi {
						color: #d5d5d5;
					}
				}
			}

			.item_line2 {
				font-size: 35rpx;
			}

			.item_line3 {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				color: #fff;

				image {
					width: 100%;
					border-radius: 10rpx;
				}

				.icon-bofang {
					font-size: 120rpx;
					position: absolute;
				}

				.play_num_wrap {
					position: absolute;
					right: 10rpx;
					bottom: 10rpx;
					padding: 5rpx 25rpx;
					border-radius: 25rpx;
					font-size: 20rpx;
					background-color: rgba(0, 0, 0, 0.6);
				}
			}

			.item_line3_share {
				display: flex;
				align-items: center;
				background-color: #f7f7f7;
				padding: 20rpx 5rpx;
				border-radius: 10rpx;

				image {
					width: 200rpx;
					height: 100rpx;
					border-radius: 10rpx;
				}
			}

			.item_line4 {
				display: flex;
				justify-content: space-between;

				.address_wrap {
					color: #bbbbbb;
				}

				.share_and_commen_wrap {
					display: flex;
					color: #bbbbbb;

					.icon-zhuanfa {
						font-size: 30rpx;
					}

					.icon-pinglun1 {
						margin: 0 20rpx;
						font-size: 30rpx;
					}

					.icon-dianzan {
						font-size: 30rpx;
					}
				}
			}
		}
	}
</style>
