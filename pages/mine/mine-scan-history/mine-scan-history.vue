<template>
	<view>
		<uni-list>
			<block v-for="(historyItem,historyIndex) in historyList">
				<uni-list-item :title="historyItem.title" :thumb="historyItem.titlepic" @click="handleDetail(historyIndex)"></uni-list-item>
			</block>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "../../../component/common/uni-list.vue"
	import uniListItem from "../../../component/common/uni-list-item.vue"
	export default {
		components: {
			uniList,
			uniListItem
		},
		onLoad() {
			uni.getStorage({
				key: "history" + this.userinfo.UserInfo.userInfo.id,
				complete: (res) => {
					console.log(res)
					if (res.data == null || res.data == '') {

					} else {
						this.historyList = JSON.parse(res.data)
					}
				}
			})
		},
		data() {
			return {
				historyList: []
			}
		},
		methods: {
			handleDetail(historyIndex) {
				uni.navigateTo({
					url: "/pages/index/index-detail/index-detail?indexItem=" + JSON.stringify(this.historyList[historyIndex])
				})
			}
		},
		onNavigationBarButtonTap() {
			uni.showModal({
				title: "提示",
				content: "是否要清除浏览记录",
				confirmText: "是",
				cancelText: "否",
				success: (res) => {
					if (res.confirm) {
						uni.setStorage({
							key: "history" + this.userinfo.UserInfo.userInfo.id,
							data: "",
							success: () => {
								this.historyList = []
								uni.showToast({
									title: "清除成功"
								})
							}
						})
					}
				}
			})
		}
	}
</script>

<style>

</style>
