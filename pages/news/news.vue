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
							<input class="uni-input" placeholder="搜索话题" disabled="true" @click="handleClickSearch" placeholder-class="iconfont icon-sousuo search_placeholder_wrap" />
						</view>
						<!-- 轮播图 -->
						<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true"
						 :indicator-active-color="activeColor" :indicator-color="defaultColor">
							<block v-for="(swiperItem,swiperIndex) in swiperList" :key="swiperIndex">
								<swiper-item>
									<image :src="swiperItem.src" mode="widthFix"></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<s-news-hot-sort :hotSortTypeList="hotSortTypeList"></s-news-hot-sort>
						<!-- 列表 -->
						<view class="recent_update_wrap">
							<view class="recent_update_title">
								最近更新
							</view>
							<block v-for="(recentItem,recentIndex) in recentUpdateList" :key="recentIndex">
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
			this.getSwiperList()
			this.getHotSortTypeList()
			this.getRecentUpdateList()
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
				newsList: {},
				activeColor: "#fff",
				defaultColor: "#000",
				swiperList: [],
				hotSortTypeList: [],
				recentUpdateList: []
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

			},
			//获取轮播图列表数据
			getSwiperList() {
				this.request({
					url: this.config.BASE_URL + "adsense/0"
				}).then(res => {
					this.swiperList = res.data.list
				})
			},
			//获取热门分类列表接口
			getHotSortTypeList() {
				this.request({
					url: this.config.BASE_URL + "topicclass"
				}).then(res => {
					this.hotSortTypeList = res.data.list
				})
			},
			//获取最近更新列表数据
			getRecentUpdateList() {
				this.request({
					url: this.config.BASE_URL + "hottopic"
				}).then(res => {
					this.recentUpdateList = res.data.list
				})
			},
			//搜索话题
			handleClickSearch() {
				uni.navigateTo({
					url: "/pages/index/search-index/search-index?type=topic"
				})
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
