<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}">
					<block v-for="(item,index) in listData" :key="item.id">
						<s-index-list :itemData="item"></s-index-list>
					</block>
				</scroll-view>

			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import sIndexList from "../../component/index/s-index-list.vue";
	import sTabBar from "../../component/index/s-tab-bar.vue"
	export default {
		components: {
			sIndexList,
			sTabBar
		},
		onLoad() {
			this.getListData()
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(70)
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
				scrollInto: ""
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				console.log(index)
				this.tabIndex = index
				this.scrollInto = this.tabBars[index].id
			},
			// 获取列表数据K
			getListData() {
				this.request({
					url: "https://m2.qiushibaike.com/article/newlist?new=1&readarticles=[123018375]"
				}).then(result => {
					this.listData = result.items
				})
			},
			handleSwiperChange(e) {
				this.tabIndex = e.detail.current
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
