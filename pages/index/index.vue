<template>
	<view>
		<block v-for="(item,index) in listData" :key="item.id">
			<s-index-list :itemData="item"></s-index-list>
		</block>
	</view>
</template>

<script>
	import sIndexList from "../../component/index/s-index-list.vue"
	export default {
		data() {
			return {
				listData: []
			}
		},
		components: {
			sIndexList
		},
		onLoad() {
			this.getListData()
		},
		methods: {
			getListData() {
				this.request({
					url: "https://m2.qiushibaike.com/article/newlist?new=1&readarticles=[123018375]"
				}).then(result => {
					this.listData = result.items
				})
			}
		}
	}
</script>

<style>

</style>
