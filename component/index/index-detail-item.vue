<template>
	<view class="commen_list">
		<view class="head_img_wrap">
			<image :src="getHeadImg" mode="aspectFill"></image>
		</view>
		<view class="item_right_wrap">
			<view class="item_line1">
				<view class="nickname_wrap">
					<view class="nickname">
						{{item.user.username}}
					</view>
					<view class="sex_age_wrap">
						<view class="iconfont" :class="[item.user.userinfo.sex==1?'icon-nan':'icon-nv']">

						</view>
						{{item.user.userinfo.age}}
					</view>

				</view>
				<view v-if="!item.hasAttention" class="attention_wrap" @click="handleAddAttention">
					<view class="attention">
						+&nbsp;关注
					</view>
					<view class="iconfont icon-guanbi">

					</view>
				</view>
			</view>
			<view class="item_line_time">
				{{formatTime}}
			</view>
			<view class="item_line2">
				{{item.content}}
			</view>
			<view class="item_line3">
				<block v-for="(imgItem,imgIndex) in item.images" :key="imgIndex">
					<image :src="imgItem.url" mode="aspectFill" @click="handleImgItemClick(imgIndex)"></image>
				</block>

				<template v-if="item.video">
					<view class="iconfont icon-bofang">

					</view>
					<view class="play_num_wrap">
						{{item.video.playNum}}{{item.video.videoTime}}
					</view>
				</template>

			</view>
			<view v-if="item.share" class="item_line3_share">
				<image :src="item.titlepic" mode=""></image>
				<view class="share_text_wrap">
					{{item.content}}
				</view>
			</view>
			<view class="item_line4">
				<view class="address_wrap">
					{{item.path}}
				</view>
				<view class="share_and_commen_wrap">
					<view class="iconfont icon-zhuanfa">
						{{item.sharenum}}
					</view>
					<view class="iconfont icon-pinglun1">
						{{item.comment_count}}
					</view>
					<view class="iconfont icon-dianzan">
						{{item.ding_count}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import time from "../../commen/time.js"
	export default {
		props: {
			item: Object
		},
		data() {
			return {
			}
		},
		methods: {
			handleAddAttention() {
				uni.$emit('handleAddAttention',{
					type:"addAttention",
					userId:this.item.user_id
				})
				this.$emit('handleAddAttention')
				uni.showToast({
					title: "关注成功"
				})
			},
			//图片点击事件
			handleImgItemClick(index) {
				const imgArr = []
				this.item.images.forEach(v => {
					imgArr.push(v.url)
				})
				uni.previewImage({
					urls: imgArr,
					current: index
				})
			}
		},
		computed: {
			getHeadImg() {
				if (this.item.user.userpic == null) {
					return "/static/userpic/12.jpg"
				} else {
					return this.item.user.userpic
				}
			},
			formatTime(){
				return time.gettime.gettime(this.item.create_time)
			}
		}
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

						.icon-nv {
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

			.item_line_time {
				color: #cecece;
			}

			.item_line2 {
				font-size: 35rpx;
			}

			.item_line3 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				color: #fff;

				image {
					margin-top: 20rpx;
					width: 100%;
					height: 300rpx;
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
