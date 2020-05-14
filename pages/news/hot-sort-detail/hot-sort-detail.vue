<template>
	<view>
		<s-news-topic-detail :topicDetailObj="topicDetailObj"></s-news-topic-detail>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" :itemStyle="itemStyle"></s-tab-bar>
		<view class="topic_detail_list_wrap">
			<block v-for="(item,index) in topicDetailList" :key="index">
				<template v-if="index==tabIndex">
					<block v-for="(listItem,listIndex) in item.list" :key="listIndex">
						<s-news-common-list :item="listItem"></s-news-common-list>
					</block>
					<s-load-more :loadText="item.loadText"></s-load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import sNewsTopicDetail from "../../../component/news/s-news-topic-detail.vue"
	import sTabBar from "../../../component/index/s-tab-bar.vue"
	import sNewsCommonList from "../../../component/common/s-news-common-list.vue"
	import sLoadMore from "../../../component/index/s-load-more.vue"
	export default {
		components: {
			sNewsTopicDetail,
			sTabBar,
			sNewsCommonList,
			sLoadMore
		},
		onLoad(options) {
			this.topicDetailObj = JSON.parse(options.topicItem)
			this.getListData()
		},
		data() {
			return {
				topicDetailObj: {},
				tabIndex: 0,
				tabBars: [{
					name: '默认',
					id: 'moren'
				}, {
					name: '最新',
					id: 'zuixin'
				}],
				itemStyle: "width:50%;",
				topicDetailList: [{
					loadText: "",
					currentPageNum: 1,
					list: []
				}, {
					loadText: "",
					currentPageNum: 1,
					list: []
				}]
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.tabIndex = index
				if (this.topicDetailList[this.tabIndex].list.length <= 0) {
					this.getListData()
				}
			},
			//获取列表数据
			getListData() {
				this.topicDetailList[this.tabIndex].loadText = "加载中..."
				this.request({
					url: this.config.BASE_URL + "/topic/" + this.topicDetailObj.id + "/post/" + this.topicDetailList[this.tabIndex]
						.currentPageNum
				}).then(res => {
					if (res.data.list.length <= 0) {
						return uni.showToast({
							title: "暂无更多数据"
						})
					}
					this.topicDetailList[this.tabIndex].list = [...this.topicDetailList[this.tabIndex].list, ...res.data.list]
					this.topicDetailList[this.tabIndex].currentPageNum = this.topicDetailList[this.tabIndex].currentPageNum + 1
					this.topicDetailList[this.tabIndex].loadText = "上拉加载更多..."
				})
			}
		},
		onReachBottom() {
			this.getListData()
		},
		onPullDownRefresh() {
			this.topicDetailList[this.tabIndex].list = []
			this.topicDetailList[this.tabIndex].currentPageNum = 1
			this.topicDetailList[this.tabIndex].loadText = ""
			this.getListData()
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="scss" scoped>

</style>
