<template>
	<view class="sort_item">
		<view class="sort_count">
			{{sortItem.count}}
		</view>
		<view class="sort_name">
			{{sortItem.name}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			sortItem: Object
		}
	}
</script>

<style lang="scss" scoped>
	.sort_item {
		flex: 1;
		text-align: center;

		.sort_count {
			color: #343434;
			font-size: 35rpx;
		}

		.sort_name {
			color: #989898;
			font-size: 30rpx;
		}
	}
</style>
