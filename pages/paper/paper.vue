<template>
	<view class="paper_wrap">
		<s-paper-menu-pop :isShowMenuDialog="isShowMenuDialog" @addFriend="addFriend" @clearUnRead="clearUnRead"
		 @handleClickMask="handleClickMask"></s-paper-menu-pop>
		<block v-for="(paperItem,paperIndex) in paperList">
			<s-paper-list-item :paperItem="paperItem" :key="paperIndex"></s-paper-list-item>
		</block>
		<s-load-more :loadText="loadText"></s-load-more>
	</view>
</template>

<script>
	import sPaperListItem from "../../component/paper/s-paper-list-item.vue"
	import sLoadMore from "../../component/index/s-load-more.vue"
	import sPaperMenuPop from "../../component/paper/s-paper-menu-pop.vue"
	export default {
		components: {
			sPaperListItem,
			sLoadMore,
			sPaperMenuPop
		},
		data() {
			return {
				paperList: [{
					headImg: "/static/userpic/10.jpg",
					nickName: "JIA一勺",
					time: "13:58",
					desc: "第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法",
					unReadCount: ""
				}, {
					headImg: "/static/userpic/11.jpg",
					nickName: "低头看鱼",
					time: "13:58",
					desc: "第三方库事件的看法",
					unReadCount: "1"
				}, {
					headImg: "/static/userpic/12.jpg",
					nickName: "飞屋睿",
					time: "13:58",
					desc: "第三方库事件的看法",
					unReadCount: "1"
				}, {
					headImg: "/static/userpic/10.jpg",
					nickName: "JIA一勺",
					time: "13:58",
					desc: "第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法",
					unReadCount: ""
				}, {
					headImg: "/static/userpic/11.jpg",
					nickName: "低头看鱼",
					time: "13:58",
					desc: "第三方库事件的看法",
					unReadCount: "1"
				}, {
					headImg: "/static/userpic/12.jpg",
					nickName: "飞屋睿",
					time: "13:58",
					desc: "第三方库事件的看法",
					unReadCount: "1"
				}, {
					headImg: "/static/userpic/10.jpg",
					nickName: "JIA一勺",
					time: "13:58",
					desc: "第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法第三方库事件的看法",
					unReadCount: ""
				}, {
					headImg: "/static/userpic/11.jpg",
					nickName: "低头看鱼",
					time: "13:58",
					desc: "第三方库事件的看法",
					unReadCount: "1"
				}, {
					headImg: "/static/userpic/12.jpg",
					nickName: "飞屋睿",
					time: "13:58",
					desc: "第三方库事件的看法",
					unReadCount: "1"
				}],
				loadText: "上拉加载更多...",
				isShowMenuDialog: false
			}
		},
		methods: {
			addFriend() {
				this.isShowMenuDialog = false
			},
			clearUnRead() {
				this.isShowMenuDialog = false
			},
			handleClickMask() {
				this.isShowMenuDialog = false
			}
		},
		// 上拉加载
		onReachBottom() {
			this.loadText = "加载中..."
			setTimeout(() => {
				this.paperList = [...this.paperList, ...this.paperList]
				this.loadText = "上拉加载更多..."
			}, 2000);
		},
		//下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000);
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					uni.navigateTo({
						url: "./s-paper-friend-list/s-paper-friend-list"
					})
					break;
				case 1:
					this.isShowMenuDialog = true
					break;
				default:
					break;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paper_wrap {}
</style>
