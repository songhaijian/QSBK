<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" :scrollInto="scrollInto"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}" @scrolltolower="handleReachBottom">
					<block v-for="(item,index) in listData" :key="index">
						<s-index-list :itemData="item"></s-index-list>
					</block>
					<s-load-more :loadText="loadText"></s-load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import sIndexList from "../../component/index/s-index-list.vue";
	import sTabBar from "../../component/index/s-tab-bar.vue";
	import sLoadMore from "../../component/index/s-load-more.vue"
	export default {
		components: {
			sIndexList,
			sTabBar,
			sLoadMore
		},
		onLoad() {
			this.getListData()
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(80)
					this.swiperHeight = height;
				}
			});
		},
		data() {
			return {
				swiperHeight: 600,
				listData: [],
				tabIndex: 1,
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
				scrollInto: "",
				loadText: "上拉加载更多..."
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.tabIndex = index
				this.scrollInto = this.tabBars[index].id
			},
			// 获取列表数据K
			getListData() {
				this.request({
					url: "https://m2.qiushibaike.com/article/newlist?new=1&readarticles=[123018375]"
				}).then(result => {
					this.listData = [...this.listData, ...result.items]
					this.loadText = "上拉加载更多..."
					// this.listData = result.items
				})
			},
			handleSwiperChange(e) {
				this.tabIndex = e.detail.current
				this.scrollInto = this.tabBars[e.detail.current].id
			},
			handleReachBottom() {
				this.loadText = "加载中..."
				this.getListData()
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "search-index/search-index"
			})
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					// 签到按钮
					break;
				case 1:
					// 发布按钮
					uni.navigateTo({
						url: "/pages/index/index-publish/index-publish"
					})
					break;
				default:
					break;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
