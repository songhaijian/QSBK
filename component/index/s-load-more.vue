<template>
	<view class="load_more_wrap">
		{{loadText}}
	</view>
</template>

<script>
	export default {
		props:{
			loadText:String
		}
	}
</script>

<style lang="scss" scoped>
	.load_more_wrap {
		text-align: center;
		padding: 20rpx 0;
		color: #aaa;
		font-size: 30rpx;
	}
</style>
