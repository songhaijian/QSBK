<template>
	<view>
		<s-mine-user-space-topbg :userInfo="userInfo" :isLoginUser="isLoginUser"></s-mine-user-space-topbg>
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
					糗龄:{{userInfo.age}}
				</view>
				<view class="age_wrap">
					糗百ID:{{userInfo.id}}
				</view>
			</view>
			<view class="home_wrap">
				<view class="account_wrap">
					个人信息
				</view>
				<view class="age_wrap">
					星座:{{userInfo.xingZuo}}
				</view>
				<view class="age_wrap">
					职业:{{userInfo.job}}
				</view>
				<view class="age_wrap">
					故乡:{{userInfo.address}}
				</view>
				<view class="age_wrap">
					情感状态:{{userInfo.qg}}
				</view>
			</view>
		</template>
		<template v-if="tabIndex==1">
			<block v-for="(listItem,listIndex) in topicDetailList.list" :key="listIndex">
				<s-news-common-list :item="listItem"></s-news-common-list>
			</block>
		</template>
		<s-mine-user-space-pop :isShowMenuDialog="isShowMenuDialog" @handleLaHei="handleLaHei" @handleRemark="handleRemark"
		 @handleClickMask="handleClickMask" :isBlack="isBlack"></s-mine-user-space-pop>
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
		onLoad(options) {
			this.userId = options.userId
			if (this.userId == this.userinfo.UserInfo.userInfo.id) {
				this.isLoginUser = true
			}
			this.getUserInfo()
		},
		data() {
			return {
				isLoginUser: false,
				isBlack: false,
				userId: 0,
				userInfo: {},
				sortList: [{
					name: "获赞",
					count: 0
				}, {
					name: "关注",
					count: 0
				}, {
					name: "粉丝",
					count: 0
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
				homeData: {},
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
				this.handleBlack(!this.isBlack)
			},
			handleRemark() {
				this.isShowMenuDialog = false
			},
			handleClickMask() {
				this.isShowMenuDialog = false
			},
			getUserInfo() {
				this.request({
					url: this.config.BASE_URL + "getuserinfo",
					method: "post",
					data: {
						user_id: this.userId
					},
					header: {
						token: this.userinfo.UserInfo.userInfo.token
					}
				}).then(res => {
					this.userInfo = res.data
					this.userInfo.bgImgIndex = 1
					this.userInfo.isAttention = res.data.fens.length > 0 ? true : false
					this.isBlack = res.data.blacklist.length > 0 ? true : false
					this.userInfo.age = time.gettime.sumAge(this.userInfo.userinfo.birthday)
					this.userInfo.xingZuo = time.gettime.getHoroscope(this.userInfo.userinfo.birthday)
					this.userInfo.job = res.data.userinfo.job
					this.userInfo.address = res.data.userinfo.path
					this.userInfo.qg = res.data.userinfo.qg
					this.getCount()
				})
			},
			getCount() {
				this.request({
					url: this.config.BASE_URL + "user/getcounts/" + this.userInfo.id
				}).then(res => {
					this.sortList[0].count = res.data.total_ding_count
					this.sortList[1].count = res.data.withfollow_count
					this.sortList[2].count = res.data.withfen_count
				})
			},
			handleBlack(type) {
				this.request({
					url: this.config.BASE_URL + (type ? "addblack" : "removeblack"),
					method: "post",
					data: {
						id: this.userInfo.userinfo.user_id
					},
					header: {
						token: this.userinfo.UserInfo.userInfo.token
					}
				}).then(res => {
					uni.showToast({
						title: res.msg
					})
					this.isBlack = !this.isBlack
				})
			}
		},
		computed: {
			getAge() {
				return time.gettime.sumAge(this.userInfo.userinfo.birthday)
			},
			getXingZuo() {
				return time.gettime.getHoroscope(this.userInfo.userinfo.birthday)
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
		justify-content: space-around;
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
