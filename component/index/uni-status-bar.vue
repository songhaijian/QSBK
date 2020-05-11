<template>
	<view :style="{ height: statusBarHeight,background: bgColor }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
		props: {
			bgColor: {
				type: String,
				value: "#fff"
			}
		}
	}
</script>

<style scoped>
	.uni-status-bar {
		width: 750rpx;
		height: 20px;
		/* height: var(--status-bar-height);
 */
	}
</style>
