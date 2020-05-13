<template>
	<view>
		<block v-for="(item,index) in listData" :key="index">
			<s-index-list :itemData="item"></s-index-list>
		</block>
	</view>
</template>

<script>
	import sIndexList from "../../../component/index/s-index-list.vue"
	export default {
		components: {
			sIndexList
		},
		data() {
			return {
				requestParam: {
					keyword: "",
					page: 1
				},
				listData: []
			}
		},
		methods: {
			getSearchList(searchText) {
				this.request({
					url: this.config.BASE_URL + "search/post",
					method: "post",
					data: this.requestParam
				}).then(res => {
					if (res.data.list.length <= 0) {
						return uni.showToast({
							title: "没有更多数据了",
							icon: "none"
						})
					}
					this.requestParam.page++
					this.listData = [...this.listData, ...res.data.list]
				})
			}
		},
		onNavigationBarSearchInputConfirmed(e) {
			if (e.text == null || e.text == '') {
				uni.showToast({
					title: "请输入搜索内容",
					icon: "none"
				})
			} else {
				this.requestParam.keyword = e.text
				this.requestParam.page = 1
				this.listData = []
				this.getSearchList(e.text)
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateBack({
				delta: 1
			})
		},
		onReachBottom() {
			this.getSearchList()
		}
	}
</script>

<style>

</style>
