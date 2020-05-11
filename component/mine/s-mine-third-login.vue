<template>
	<view class="unlogin_logo_wrap">
		<view class="iconfont icon-weixin">
	
		</view>
		<view class="iconfont icon-QQ">
	
		</view>
		<view class="iconfont icon-xinlangweibo">
	
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.unlogin_logo_wrap {
		display: flex;
		padding: 20rpx 80rpx;
		justify-content: space-evenly;
	
		.iconfont {
			font-size: 50rpx;
			color: #fff;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	
		.icon-weixin {
			background-color: #2bd19b;
		}
	
		.icon-QQ {
			background-color: #2caefc;
		}
	
		.icon-xinlangweibo {
			background-color: #fc7729;
		}
	}
</style>
