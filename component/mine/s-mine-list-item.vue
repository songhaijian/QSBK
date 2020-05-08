<template>
	<view class="list_item_wrap">
		<view class="iconfont list_item_left_icon" :class="listItem.icon" :style="{color:listItem.iconColor}">

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
