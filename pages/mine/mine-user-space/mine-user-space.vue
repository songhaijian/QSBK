<template>
	<view>
		<s-mine-user-space-topbg :userInfo="userInfo"></s-mine-user-space-topbg>
		<view class="sort_wrap">
			<block v-for="(sortItem,sortIndex) in sortList">
				<s-mine-sort-item :sortItem="sortItem"></s-mine-sort-item>
			</block>
		</view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" :itemStyle="itemStyle"></s-tab-bar>
		<template v-if="tabIndex==0">
			<view class="home_wrap">
				<view class="account_wrap">
					账号信息
				</view>
				<view class="age_wrap">
					糗龄:{{getAge}}
				</view>
				<view class="age_wrap">
					糗百ID:{{homeData.id}}
				</view>
			</view>
			<view class="home_wrap">
				<view class="account_wrap">
					个人信息
				</view>
				<view class="age_wrap">
					星座:{{getXingZuo}}
				</view>
				<view class="age_wrap">
					职业:{{homeData.position}}
				</view>
				<view class="age_wrap">
					故乡:{{homeData.address}}
				</view>
				<view class="age_wrap">
					情感状态:{{homeData.qg}}
				</view>
			</view>
		</template>
		<template v-if="tabIndex==1">
			<block v-for="(listItem,listIndex) in topicDetailList.list" :key="listIndex">
				<s-news-common-list :item="listItem"></s-news-common-list>
			</block>
		</template>
		<s-mine-user-space-pop :isShowMenuDialog="isShowMenuDialog" @handleLaHei="handleLaHei" @handleRemark="handleRemark" @handleClickMask="handleClickMask"></s-mine-user-space-pop>
	</view>
</template>

<script>
	import sMineUserSpaceTopbg from "../../../component/mine/s-mine-user-space-topbg.vue"
	import sMineSortItem from "../../../component/mine/s-mine-sort-item.vue"
	import sTabBar from "../../../component/index/s-tab-bar.vue"
	import sNewsCommonList from "../../../component/common/s-news-common-list.vue"
	import time from "../../../commen/time.js"
	import sMineUserSpacePop from "../../../component/mine/s-mine-user-space-pop.vue"
	export default {
		components: {
			sMineUserSpaceTopbg,
			sMineSortItem,
			sTabBar,
			sNewsCommonList,
			sMineUserSpacePop
		},
		data() {
			return {
				userInfo: {
					bgImgIndex: 1,
					isAttention: false,
					headImg: "/static/userpic/10.jpg",
					age: "20",
					sex: 0,
					name: "JIA一勺",
				},
				sortList: [{
					name: "获赞",
					count: '10K'
				}, {
					name: "关注",
					count: '11'
				}, {
					name: "粉丝",
					count: '12'
				}],
				tabIndex: 0,
				tabBars: [{
					name: '主页',
					id: 'zhuye'
				}, {
					name: '糗事',
					id: 'qiushi'
				}, {
					name: '动态',
					id: 'dongtai'
				}],
				itemStyle: "width:33.33%;",
				topicDetailList: {
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
						}, // 文字
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
						}, // 文字
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
						}, // 文字
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
						}
					]
				},
				homeData: {
					age: "1年8月6日",
					id: "1215",
					position: "IT",
					address: "广东广州",
					qg: "已婚",
					birthday: "2019-06-23"
				},
				isShowMenuDialog: false
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.tabIndex = index
			},
			handleLaHei() {
				this.isShowMenuDialog = false
			},
			handleRemark() {
				this.isShowMenuDialog = false
			},
			handleClickMask() {
				this.isShowMenuDialog = false
			}
		},
		computed: {
			getAge() {
				return time.gettime.sumAge(this.homeData.birthday)
			},
			getXingZuo() {
				return time.gettime.getHoroscope(this.homeData.birthday)
			}
		},
		onNavigationBarButtonTap(e) {
			this.isShowMenuDialog = true
		}
	}
</script>

<style lang="scss" scoped>
	.sort_wrap {
		padding: 0 100rpx;
		position: relative;
		display: flex;
		margin-top: -50rpx;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0 0;
		z-index: 10;
		border-bottom: 20rpx solid #f4f4f4;
	}

	.home_wrap {
		padding: 20rpx;
		border-bottom: 1rpx solid #EEEEEE;

		.account_wrap {
			color: #343434;
		}

		.age_wrap {
			color: #aeaeae;
		}
	}
</style>
