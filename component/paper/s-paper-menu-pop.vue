<template>
	<view>
		<view class="right_menu" v-show="isShowMenuDialog">
			<view class="menu_line iconfont icon-sousuo" @click="addFriend">
				<view class="title">
					加糗友
				</view>
			</view>
			<view class="menu_line iconfont icon-qingchu" @click="clearUnRead">
				<view class="title">
					清除未读
				</view>
			</view>
		</view>
		<view class="menu_pop_mask" @click="handleClickMask" v-show="isShowMenuDialog"> </view>
	</view>
</template>

<script>
	export default {
		props: {
			isShowMenuDialog: {
				type: Boolean,
				value: false
			}
		},
		methods:{
			addFriend() {
				this.$emit('addFriend')
			},
			clearUnRead() {
				this.$emit('clearUnRead')
			},
			handleClickMask() {
				this.$emit('handleClickMask')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.right_menu {
		position: fixed;
		right: 0;
		top: 10rpx;
		width: 40%;
		background-color: #FFFFFF;
		box-shadow: -5rpx 5rpx 20rpx 5rpx #CCCCCC;
		padding: 10rpx 20rpx;
		color: #000;
		font-weight: 600;
		z-index: 1000;

		.menu_line {
			display: flex;
			align-items: center;

			.title {
				margin-left: 20rpx;
			}
		}
	}

	.menu_pop_mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}
</style>
