<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" :scrollInto="scrollInto"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}" @scrolltolower="handleReachBottom" class="sc_wrap">
					<block v-for="(recentItem,recentIndex) in topicData.recentUpdateList" :key="recentIndex">
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
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: '历史',
					id: 'lishi'
				}, {
					name: '本地',
					id: 'bendi'
				}],
				topicData: {
					"swiperList": [{
						"imagePath": "../../static/banner1.jpg"
					}, {
						"imagePath": "../../static/banner2.jpg"
					}, {
						"imagePath": "../../static/banner3.jpg"
					}],
					"hotSortTypeList": [{
							"title": "最新"
						},
						{
							"title": "游戏"
						},
						{
							"title": "情感"
						},
						{
							"title": "打卡"
						},
						{
							"title": "故事"
						},
						{
							"title": "喜爱"
						}
					],
					"recentUpdateList": [{
						imagePath: "../../../static/topicpic/1.jpeg",
						title: "淘宝记录簿",
						desc: "120斤到85斤 我的反转人生",
						newsNum: 545,
						todayNum: 720
					}, {
						imagePath: "../../../static/topicpic/2.jpeg",
						title: "你起身经理的灵异事件",
						desc: "走出去,才发现你跟别人差的不是一点半点",
						newsNum: 577,
						todayNum: 821
					}, {
						imagePath: "../../../static/topicpic/3.jpeg",
						title: "天天大卡",
						desc: "面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用",
						newsNum: 507,
						todayNum: 707
					}, {
						imagePath: "../../../static/topicpic/4.jpeg",
						title: "淘宝记录簿",
						desc: "120斤到85斤 我的反转人生",
						newsNum: 545,
						todayNum: 720
					}, {
						imagePath: "../../../static/topicpic/5.jpeg",
						title: "你起身经理的灵异事件",
						desc: "走出去,才发现你跟别人差的不是一点半点",
						newsNum: 577,
						todayNum: 821
					}, {
						imagePath: "../../../static/topicpic/6.jpeg",
						title: "天天大卡",
						desc: "面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用",
						newsNum: 507,
						todayNum: 707
					}]
				}
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(80)
					this.swiperHeight = height;
				}
			});
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
			},
			handleReachBottom() {
				this.topicData.recentUpdateList = [...this.topicData.recentUpdateList, ...this.topicData.recentUpdateList]
			}
		}
	}
</script>

<style>
	.sc_wrap {
		padding: 20rpx;
	}
</style>
