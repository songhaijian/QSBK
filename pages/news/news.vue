<template>
	<view>
		<!-- 导航栏 -->
		<s-news-tabbar :navTitles="navTitles" :navIndex="navIndex" @tabClick="handleTabClick"></s-news-tabbar>
		<!-- 列表 -->
		<swiper :current="navIndex" @change="handleSwiperChange" :style="{height:swiperHeight+'px'}">
			<swiper-item>
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}" @scrolltolower="handleReachBottom">
					<block v-for="(item,index) in newsList.list" :key="index">
						<s-news-common-list :item="item"></s-news-common-list>
					</block>
					<s-load-more :loadText="newsList.loadText"></s-load-more>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}" @scrolltolower="handleReachBottom">
					<view class="topic_wrap">
						<!-- 搜索框 -->
						<view class="search_wrap">
							<input class="uni-input" placeholder="搜索内容" placeholder-class="iconfont icon-sousuo search_placeholder_wrap" />
						</view>
						<!-- 轮播图 -->
						<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true"
						 :indicator-active-color="activeColor" :indicator-color="defaultColor">
							<block v-for="(swiperItem,swiperIndex) in topicData.swiperList" :key="swiperIndex">
								<swiper-item>
									<image :src="swiperItem.imagePath" mode="widthFix"></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<s-news-hot-sort :hotSortTypeList="topicData.hotSortTypeList"></s-news-hot-sort>
						<!-- 列表 -->
						<view class="recent_update_wrap">
							<view class="recent_update_title">
								最近更新
							</view>
							<block v-for="(recentItem,recentIndex) in topicData.recentUpdateList" :key="recentIndex">
								<s-news-recent-update-item :recentItem="recentItem"></s-news-recent-update-item>
							</block>
						</view>
					</view>
				</scroll-view>

			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import sNewsTabbar from "../../component/news/s-news-tabbar.vue";
	import sNewsCommonList from "../../component/common/s-news-common-list.vue";
	import sLoadMore from "../../component/index/s-load-more.vue"
	import sNewsHotSort from "../../component/news/s-news-hot-sort.vue"
	import sNewsRecentUpdateItem from "../../component/news/s-news-recent-update-item.vue"
	export default {
		components: {
			sNewsTabbar,
			sNewsCommonList,
			sLoadMore,
			sNewsHotSort,
			sNewsRecentUpdateItem
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(80)
					this.swiperHeight = height;
				}
			})
		},
		data() {
			return {
				swiperHeight: 600,
				navTitles: [{
					title: "关注",
					id: "guanzhu"
				}, {
					title: "话题",
					id: "huati"
				}],
				navIndex: 1,
				newsList: {
					"loadText": "上拉加载更多...",
					"list": [
						// 文字
						{
							userPic: "../../static/userpic/10.jpg",
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
							userPic: "../../static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 1, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "../../static/datapic/1.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						},
						// 视频
						{
							userPic: "../../static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "../../static/datapic/1.jpg",
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
							userPic: "../../static/userpic/10.jpg",
							userName: "三鱼先生",
							sex: 0, //0:男 1：女
							age: 25,
							isAttention: false,
							title: "六道快手家常菜,好吃又下饭,家人都喜欢",
							titlePic: "",
							video: false,
							share: {
								shareTitle: "从男人监督告诉你,为什么他对你有好感却不追呢",
								shareImg: "../../static/datapic/1.jpg"
							},
							path: "深圳 龙岗",
							shareNum: 36,
							commentNum: 27,
							favNum: 9829
						}
					]
				},
				activeColor: "#fff",
				defaultColor: "#000",
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
						imagePath: "../../static/topicpic/1.jpeg",
						title: "淘宝记录簿",
						desc: "120斤到85斤 我的反转人生",
						newsNum: 545,
						todayNum: 720
					}, {
						imagePath: "../../static/topicpic/2.jpeg",
						title: "你起身经理的灵异事件",
						desc: "走出去,才发现你跟别人差的不是一点半点",
						newsNum: 577,
						todayNum: 821
					}, {
						imagePath: "../../static/topicpic/3.jpeg",
						title: "天天大卡",
						desc: "面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用",
						newsNum: 507,
						todayNum: 707
					}, {
						imagePath: "../../static/topicpic/4.jpeg",
						title: "淘宝记录簿",
						desc: "120斤到85斤 我的反转人生",
						newsNum: 545,
						todayNum: 720
					}, {
						imagePath: "../../static/topicpic/5.jpeg",
						title: "你起身经理的灵异事件",
						desc: "走出去,才发现你跟别人差的不是一点半点",
						newsNum: 577,
						todayNum: 821
					}, {
						imagePath: "../../static/topicpic/6.jpeg",
						title: "天天大卡",
						desc: "面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用",
						newsNum: 507,
						todayNum: 707
					}]
				}
			}
		},
		methods: {
			// Tabbar点击事件
			handleTabClick(index) {
				this.navIndex = index
			},
			//swiper滑动事件
			handleSwiperChange(e) {
				this.navIndex = e.detail.current
			},
			//滑动到底部
			handleReachBottom() {
				if ("上拉加载更多..." == this.newsList.loadText) {
					this.newsList.loadText = "加载中..."
					setTimeout(() => {
						this.newsList.list = [...this.newsList.list, ...this.newsList.list]
						this.newsList.loadText = "上拉加载更多..."
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topic_wrap {
		.search_wrap {
			padding: 20rpx;

			input {
				background-color: #f4f4f4;
				border-radius: 10rpx;
			}

			.search_placeholder_wrap {
				display: flex;
				justify-content: center;

			}
		}

		.swiper_wrap {
			padding: 0 20rpx 20rpx 20rpx;

			image {
				width: 100%;
				border-radius: 10rpx;
			}
		}

		.recent_update_wrap {
			padding: 20rpx;

			.recent_update_title {}

		}
	}
</style>
