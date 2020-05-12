<template>
	<view class="top_bg_and_info">
		<image :src="bgImgSrc" mode="aspectFill" lazy-load="true" @click="handleChangeBg"></image>
		<view class="user_info_wrap">
			<image :src="userInfo.headImg" mode="widthFix"></image>
			<view class="info_wrap">
				<view class="nickname_wrap">
					{{userInfo.name}}
				</view>
				<view class="age_wrap">
					<view class="iconfont icon-nan">

					</view>
					<view class="age">
						{{userInfo.age}}
					</view>
				</view>
			</view>
			<view class="attention_wrap" :class="{is_attention_wrap:isAttention}" @click="handleChangeAttention">
				<view v-if="!isAttention" class="iconfont icon-zengjia">

				</view>
				<view class="attention">
					{{isAttention?'已关注':'关注'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: Object
		},
		data() {
			return {
				bgImgSrc: '/static/bgimg/' + this.userInfo.bgImgIndex + '.jpg',
				isAttention: this.userInfo.isAttention
			}
		},
		methods: {
			handleChangeBg() {
				this.userInfo.bgImgIndex++
				this.bgImgSrc = '/static/bgimg/' + (this.userInfo.bgImgIndex % 4 + 1) + '.jpg'
			},
			handleChangeAttention() {
				if (!this.isAttention) {
					this.isAttention = !this.isAttention
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_bg_and_info {
		position: relative;

		image {
			width: 100%;
			height: 35vh;
		}

		.user_info_wrap {
			position: absolute;
			bottom: 15%;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;

			image {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}

			.info_wrap {
				display: flex;
				align-items: center;

				.nickname_wrap {
					color: #fff;
					font-size: 30rpx;
					font-weight: bold;
				}

				.age_wrap {
					margin-left: 10rpx;
					display: flex;
					align-items: center;
					background-color: #43b1fc;
					color: #fff;
					height: 30rpx;
					padding: 0 8rpx;
					border-radius: 15rpx;
					border: 1rpx solid#FFFFFF;

					.icon-nan {
						font-size: 23rpx;
					}

					.age {
						font-size: 23rpx;
					}
				}
			}

			.attention_wrap {
				margin-top: 20rpx;
				display: inline-flex;
				align-items: center;
				background-color: #ffe933;
				border: 1rpx solid #ffe933;
				border-radius: 10rpx;
				height: 50rpx;
				color: #000;
				padding: 0 10rpx;

				.icon-zengjia {}

				.attention {}
			}

			.is_attention_wrap {
				background-color: transparent;
				color: #fff;
				border: 1rpx solid #fff;
			}
		}
	}
</style>
