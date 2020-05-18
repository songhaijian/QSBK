<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" itemStyle="width:33.33%;" :scrollInto="scrollInto"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}">
					<block v-for="(friendItem,friendIndex) in friendList[tabIndex].list" :key="friendIndex">
						<s-paper-friend-item :friendItem="friendItem"></s-paper-friend-item>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	import sTabBar from "../../../component/index/s-tab-bar.vue"
	import sPaperFriendItem from "../../../component/paper/s-paper-friend-item.vue"
	export default {
		components: {
			sTabBar,
			sPaperFriendItem
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
						this.getCountList()
					}
				}
			})
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(80)
					this.swiperHeight = height;
				}
			});
		},
		data() {
			return {
				isLogin: false,
				userInfo: {},
				swiperHeight: 600,
				scrollInto: "",
				tabIndex: 0,
				tabBars: [{
					name: '互关',
					id: 'huguan',
					num: 0
				}, {
					name: '关注',
					id: 'guanzhu',
					num: 0
				}, {
					name: '粉丝',
					id: 'fensi',
					num: 0
				}],
				friendList: [{
						"list": [],
						"currentPageNum": 1
					},
					{
						"list": [],
						"currentPageNum": 1
					},
					{
						"list": [],
						"currentPageNum": 1
					}
				]
			}
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
				if (this.friendList[this.tabIndex].list.length <= 0) {
					this.getFriendList(this.tabIndex)
				}
			},
			getCountList() {
				this.request({
					url: this.config.BASE_URL + "user/getcounts/" + this.userInfo.id,
					header: {
						token: this.userInfo.token
					}
				}).then(res => {
					this.tabBars[0].num = res.data.friend_count
					this.tabBars[1].num = res.data.withfollow_count
					this.tabBars[2].num = res.data.withfen_count
					this.getFriendList(0)
				})
			},
			getFriendList(index) {
				var urlArr = ['friends/', 'follows/', 'fens/']
				this.request({
					url: this.config.BASE_URL + urlArr[index] + this.friendList[this.tabIndex].currentPageNum,
					header: {
						token: this.userInfo.token
					}
				}).then(res => {
					this.friendList[this.tabIndex].list = [...this.friendList[this.tabIndex].list, ...res.data.list]
					this.friendList[this.tabIndex].currentPageNum = this.friendList[this.tabIndex].currentPageNum + 1
				})
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"../../index/search-index/search-index?type=user"
			})
		}
	}
</script>

<style lang="scss" scoped>

</style>
