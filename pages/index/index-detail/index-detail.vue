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
		onLoad(options) {
			uni.setNavigationBarTitle({
				title:JSON.parse(options.indexItem).content
			})
		},
		methods: {
			
		},
		onNavigationBarButtonTap: (res) => {
			console.log(res.index)
		}
	}
</script>

<style>

</style>
