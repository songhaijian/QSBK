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
		data() {
			return {
				topicDetailObj: {
					imagePath: "/static/topicpic/3.jpeg",
					title: "天天大卡",
					desc: "面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用",
					newsNum: 507,
					todayNum: 707
				},
				tabIndex: 1,
				tabBars: [{
					name: '默认',
					id: 'moren'
				}, {
					name: '最新',
					id: 'zuixin'
				}],
				itemStyle: "width:50%;",
				topicDetailList: [{
					loadText: "上拉加载更多...",
					list: [
						// 文字
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 图文
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 1, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "/static/datapic/1.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 视频
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "/static/datapic/1.jpg",
							video: {
								playNum: "20W次播放",
								videoTime: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 分享
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "",
							video: false,
							share: {
								shareTitle: "从男人监督告诉你,为什么他对你有好感却不追呢",
								shareImg: "/static/datapic/1.jpg"
							},
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						}
					]
				}, {
					loadText: "上拉加载更多...",
					list: [
						// 文字
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 图文
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 1, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "/static/datapic/1.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 视频
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "/static/datapic/1.jpg",
							video: {
								playNum: "20W次播放",
								videoTime: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 分享
						{
							userPic: "/static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "",
							video: false,
							share: {
								shareTitle: "从男人角度告诉你,为什么他对你有好感却不追呢",
								shareImg: "/static/datapic/1.jpg"
							},
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						}
					]
				}]
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.tabIndex = index
			}
		},
		onReachBottom() {
			this.topicDetailList[this.tabIndex].loadText = "加载中..."
			this.topicDetailList[this.tabIndex].list = [...this.topicDetailList[this.tabIndex].list, ...this.topicDetailList[
					this.tabIndex]
				.list
			]
			this.topicDetailList[this.tabIndex].loadText = "上拉加载更多..."
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000);
		}
	}
</script>

<style lang="scss" scoped>

</style>
