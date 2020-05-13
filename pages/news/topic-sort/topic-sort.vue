<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" :scrollInto="scrollInto"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}" @scrolltolower="handleReachBottom" class="sc_wrap">
					<block v-for="(recentItem,recentIndex) in listData" :key="recentIndex">
						<s-news-recent-update-item :recentItem="recentItem"></s-news-recent-update-item>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import sTabBar from "../../../component/index/s-tab-bar.vue"
	import sNewsRecentUpdateItem from "../../../component/news/s-news-recent-update-item.vue"
	export default {
		components: {
			sTabBar,
			sNewsRecentUpdateItem
		},
		data() {
			return {
				swiperHeight: 600,
				scrollInto: "",
				tabIndex: 0,
				tabBars: [],
				listData: []
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(80)
					this.swiperHeight = height;
				}
			});
			this.getSortList()
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.tabIndex = index
				this.scrollInto = this.tabBars[index].id
			},
			handleSwiperChange(e) {
				this.tabIndex = e.detail.current
				this.scrollInto = this.tabBars[e.detail.current].id
				if (this.tabBars[this.tabIndex].listData.length <= 0) {
					this.getTopicList()
				} else {
					this.listData = this.tabBars[this.tabIndex].listData
				}
			},
			handleReachBottom() {
				this.getTopicList()
			},
			//获取分类列表数据
			getSortList() {
				this.request({
					url: this.config.BASE_URL + "topicclass"
				}).then(res => {
					res.data.list.forEach(v => {
						v.name = v.classname
						v.tabId = v.id
						v.id = "id" + v.id
						v.listData = []
						v.currentPageNum = 1
						this.tabBars.push(v)
					})
					this.getTopicList()
				})
			},
			//获取话题分类列表
			getTopicList() {
				this.request({
					url: this.config.BASE_URL + "topicclass/" + this.tabBars[this.tabIndex].tabId + "/topic/" + this.tabBars[this.tabIndex]
						.currentPageNum
				}).then(res => {
					if (res.data.list.length <= 0) {
						return uni.showToast({
							title: "暂无更多数据",
							icon: "none"
						})
					}
					this.tabBars[this.tabIndex].listData = [...this.tabBars[this.tabIndex].listData, ...res.data.list]
					this.tabBars[this.tabIndex].currentPageNum = this.tabBars[this.tabIndex].currentPageNum + 1
					this.listData = this.tabBars[this.tabIndex].listData
				})
			}
		}
	}
</script>

<style>
	.sc_wrap {
		padding: 20rpx;
	}
</style>
