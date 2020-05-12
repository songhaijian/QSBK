<template>
	<view class="list_item_wrap" @click="handleItemClick">
		<view v-if="listItem.icon" class="iconfont list_item_left_icon" :class="listItem.icon" :style="{color:listItem.iconColor}">

		</view>
		<view class="list_item_title">
			{{listItem.title}}
		</view>
		<view class="iconfont icon-jinru">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			listItem: Object
		},
		methods: {
			handleItemClick() {
				if (this.listItem.navigatorUrl != null) {
					if (this.listItem.navigatorType == 'navigatorTo') {
						uni.navigateTo({
							url: this.listItem.navigatorUrl
						})
					} else if (this.listItem.navigatorType == 'switchTab') {
						uni.switchTab({
							url: this.listItem.navigatorUrl
						})
					} else if (this.listItem.navigatorType == 'clear') {
						uni.showModal({
							title: "提示",
							content: "是否要清除缓存",
							confirmText: "立即清除",
							success: (res) => {
								if (res.confirm) {
									uni.clearStorage()
									uni.showToast({
										title: "清除成功",
										icon: "none"
									})
								}
							}
						})
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list_item_wrap {
		display: flex;
		padding: 15rpx;
		align-items: center;
		border-bottom: 1rpx solid #EEEEEE;

		.list_item_left_icon {}

		.list_item_title {
			flex: 1;
			margin-left: 10rpx;
			font-size: 30rpx;
		}

		.icon-jinru {
			color: #c1c1c1;
		}
	}
</style>
