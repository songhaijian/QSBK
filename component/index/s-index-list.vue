<template>
	<view class="item_wrap animated fadeInDown fast">
		<view class="item_line1">
			<view class="line1_left">
				<image :src="getHeadImg" mode="aspectFill" lazy-load="true" @tap.stop="handleUserSpace"></image>
				<view class="user_wrap">
					<view class="name_wrap">
						<view class="nickname">
							{{itemData.user.username}}
						</view>
						<image v-if="itemData.user.titles != null" :src="itemData.user.titles[0].icon" mode="widthFix"></image>
					</view>
					<view v-if="itemData.user.talents != null" class="user_tag">
						{{itemData.user.talents[0].cmd_desc}}
					</view>
				</view>
			</view>

			<view class="attention" v-if="!itemData.hasAttention" @click="handleAddAttention">
				+&nbsp;关注
			</view>
		</view>
		<view class="item_line2">
			{{itemData.content}}
		</view>
		<view v-if="itemData.titlepic" class="item_line3" @click="handleItemClick">
			<image :src="itemData.titlepic" mode="scaleToFill" lazy-load="true"></image>
		</view>
		<view class="item_line4">
			<view class="left_wrap iconfont icon-icon_xiaolian-mian">
				<view class="like_num">
					{{itemData.ding_count}}
				</view>
				<view class="hate_num iconfont icon-kulian">

				</view>
			</view>
			<view class="right_wrap">
				<view class="iconfont icon-pinglun1">

				</view>
				<view class="comment_num">
					{{itemData.comment_count}}
				</view>
				<view class="iconfont icon-zhuanfa">

				</view>
				<view class="share_num ">
					{{itemData.sharenum}}
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
					url: "/pages/index/index-detail/index-detail?indexItem=" + JSON.stringify(this.itemData)
				})
				var historyList = []
				uni.getStorage({
					key: "history" + this.userinfo.UserInfo.userInfo.id,
					complete: (res) => {
						if (res.data == null || res.data == '') {

						} else {
							historyList = JSON.parse(res.data)
						}
						var hasIndex = historyList.findIndex(v => {
							return v.id == this.itemData.id
						})
						if (hasIndex < 0) {
							historyList.push(this.itemData)
							uni.setStorage({
								key: "history" + this.userinfo.UserInfo.userInfo.id,
								data: JSON.stringify(historyList),
								success() {
									console.log("添加成功")
								}
							})
						}
					}
				})

			},
			handleAddAttention() {
				this.$emit('handleAddAttention', {
					userId: this.itemData.user_id
				})
			},
			handleUserSpace() {
				uni.navigateTo({
					url: "/pages/mine/mine-user-space/mine-user-space?userId=" + this.itemData.user.id
				})
			}
		},
		computed: {
			getHeadImg() {
				if (this.itemData.user.userpic == null) {
					return "/static/userpic/12.jpg"
				} else {
					return this.itemData.user.userpic
				}
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
					height: 80rpx;
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
				height: 300rpx;
				will-change: transform;
				border-radius: 10rpx;
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
