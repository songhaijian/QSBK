<template>
	<view>
		<template v-if="type=='qiushi'">
			<block v-for="(item,index) in listData" :key="index">
				<s-index-list :itemData="item"></s-index-list>
			</block>
		</template>
		<template v-if="type=='topic'">
			<block v-for="(item,index) in listData" :key="index">
				<s-news-recent-update-item :recentItem="item"></s-news-recent-update-item>
			</block>
		</template>
		<template v-if="type=='user'">
			<block v-for="(item,index) in listData" :key="index">
				<s-paper-friend-item :friendItem="item"></s-paper-friend-item>
			</block>
		</template>
	</view>
</template>

<script>
	import sIndexList from "../../../component/index/s-index-list.vue"
	import sNewsRecentUpdateItem from "../../../component/news/s-news-recent-update-item.vue"
	import sPaperFriendItem from "../../../component/paper/s-paper-friend-item.vue"
	export default {
		components: {
			sIndexList,
			sNewsRecentUpdateItem,
			sPaperFriendItem
		},
		onLoad(options) {
			this.type = options.type
			if (options.type == 'qiushi') {
				this.typeUrl = "search/post"
			} else if (options.type == 'topic') {
				this.typeUrl = "search/topic"
			} else if (options.type == 'user') {
				this.typeUrl = "search/user"
			}
			// #ifdef APP-PLUS
			let currentWebView = this.$mp.page.$getAppWebview()
			let titleView = currentWebView.getStyle().titleNView
			if (options.type == 'qiushi') {
				titleView.searchInput.placeholder = "搜索糗事"
			} else if (options.type == 'topic') {
				titleView.searchInput.placeholder = "搜索话题"
			} else if (options.type == 'user') {
				titleView.searchInput.placeholder = "搜索人员"
			}
			currentWebView.setStyle({
				titleNView: titleView
			})
			// #endif
		},
		data() {
			return {
				type: "",
				typeUrl: "",
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
					url: this.config.BASE_URL + this.typeUrl,
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
