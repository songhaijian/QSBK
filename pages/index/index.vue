<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" :scrollInto="scrollInto"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}" @scrolltolower="handleReachBottom">
					<block v-for="(item,index) in listData" :key="index">
						<s-index-list :itemData="item" @handleAddAttention="handleAddAttention"></s-index-list>
					</block>
					<!-- <s-load-more :loadText="loadText" v-if="tabBars[tabIndex].currentPageNum>1"></s-load-more> -->
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
			uni.getStorage({
				key: "userinfo",
				complete: (res) => {
					if (res.data == null || res.data == '') {
						this.isLogin = false
					} else {
						this.isLogin = true
						this.userInfo = JSON.parse(res.data)
					}
				}
			})
			this.getTabList()
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(80)
					this.swiperHeight = height;
				}
			});
			uni.$on("handleAddAttention", (e) => {
				this.tabBars.forEach(parentv => {
					parentv.listData.forEach(v => {
						if (v.user_id == e.userId) {
							v.hasAttention = true
						}
					})
				})
				this.listData = this.tabBars[this.tabIndex].listData
			})
		},
		data() {
			return {
				swiperHeight: 600,
				tabIndex: 1,
				tabBars: [],
				scrollInto: "",
				loadText: "上拉加载更多...",
				listData: [],
				userInfo: {},
				isLogin: false
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.tabIndex = index
				this.scrollInto = this.tabBars[index].id
			},
			//滑动切换
			handleSwiperChange(e) {
				this.tabIndex = e.detail.current
				this.scrollInto = this.tabBars[e.detail.current].id
				if (this.tabBars[this.tabIndex].listData.length <= 0) {
					this.getListData()
				} else {
					this.listData = this.tabBars[this.tabIndex].listData
				}
			},
			//获取tablist数据
			getTabList() {
				this.request({
					url: this.config.BASE_URL + "postclass"
				}).then(result => {
					this.tabBars = result.data.list
					this.tabBars.forEach(v => {
						v.name = v.classname
						v.tabId = v.id
						v.id = "id" + v.id
						v.currentPageNum = 1
						v.listData = []
					})
					this.getListData()
				})
			},
			// 获取列表数据
			getListData() {
				// this.listData = []
				this.request({
					url: this.config.BASE_URL + "postclass/" + this.tabBars[this.tabIndex].tabId + "/post/" + this.tabBars[this.tabIndex]
						.currentPageNum,
					header: {
						token: this.isLogin ? this.userInfo.token : ''
					}
				}).then(res => {
					if (res.data.list.length <= 0) {
						return uni.showToast({
							title: "没有更多数据了"
						})
					}
					this.tabBars[this.tabIndex].listData = [...this.tabBars[this.tabIndex].listData, ...res.data.list]
					this.tabBars[this.tabIndex].currentPageNum = this.tabBars[this.tabIndex].currentPageNum + 1
					this.changeAttention()
					this.listData = this.tabBars[this.tabIndex].listData
				})
			},
			changeAttention() {
				this.tabBars.forEach(parentv => {
					parentv.listData.forEach(v => {
						v.user.fens.find(fv => {
							if (fv.id == this.userInfo.id) {
								v.hasAttention = true
							}
						})
					})
				})
			},
			//到达底部
			handleReachBottom() {
				this.loadText = "加载中..."
				this.getListData()
			},
			handleAddAttention(e) {
				// this.tabBars.forEach(parentv => {
				// 	parentv.listData.forEach(v => {
				// 		if (v.user_id == e.userId) {
				// 			v.hasAttention = true
				// 		}
				// 	})
				// })
				this.listData.forEach(v => {
					if (v.user_id == e.userId) {
						v.hasAttention = true
					}
				})
				console.log(this.listData)
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "search-index/search-index?type=qiushi"
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
