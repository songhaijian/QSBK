<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onNavigationBarSearchInputChanged(e) {
			console.log("输入监听:" + e.text)
		},
		onNavigationBarSearchInputConfirmed(e) {
			console.log("确认监听:" + e.text)
		},
		onNavigationBarButtonTap(e) {
			uni.navigateBack({
				delta: 1
			})
		}
	}
</script>

<style>

</style>
