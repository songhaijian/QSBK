<template>
	<view class="friend_item_wrap">
		<image :src="friendItem.headImg" mode="widthFix"></image>
		<view class="friend_item_middle">
			<view class="nickname">
				{{friendItem.nickName}}
			</view>
			<view class="sex_wrap" :class="[friendItem.sex==0?'femaleBg':'maleBg']">
				<view class="iconfont" :class="[friendItem.sex==0?'icon-nv':'icon-nan']">

				</view>
				<view class="age">
					{{friendItem.age}}
				</view>
			</view>
		</view>
		<view class="iconfont " :class="[isAttention?'icon-xuanze':'icon-zengjia1']" @click="handleAddAttention">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			friendItem: Object
		},
		data() {
			return {
				isAttention: this.friendItem.isAttention
			}
		},
		methods: {
			handleAddAttention() {
				if (!this.isAttention) {
					this.isAttention = !this.isAttention
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.friend_item_wrap {
		margin: 0 20rpx;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #EEEEEE;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}

		.friend_item_middle {
			margin-left: 20rpx;
			flex: 1;

			.nickname {
				font-size: 30rpx;
			}

			.femaleBg {
				background-color: #ff698d;
			}

			.maleBg {
				background-color: #43b3ff;
			}

			.sex_wrap {
				display: inline-flex;
				height: 30rpx;
				align-items: center;
				justify-content: center;
				border-radius: 20rpx;
				padding: 0 10rpx;
				color: #fff;

				.icon-nan,
				.icon-nv,
				.age {
					font-size: 22rpx;
				}
			}
		}

		.icon-zengjia1 {
			padding: 0 20rpx;
			color: #f87a1d;
		}

		.icon-xuanze {
			padding: 0 20rpx;
			color: #cccccc;
		}
	}
</style>
