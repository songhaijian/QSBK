<template>
	<view>
		<s-tab-bar :tabIndex="tabIndex" :tabBars="tabBars" @itemClick="handleItemClick" itemStyle="width:33.33%;" :scrollInto="scrollInto"></s-tab-bar>
		<swiper :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(pageItem,pageIndex) in tabBars" :key="pageIndex">
				<scroll-view scroll-y="true" :style="{height:swiperHeight+'px'}">
					<block v-for="(friendItem,friendIndex) in friendList" :key="friendIndex">
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
				scrollInto: "",
				tabIndex: 0,
				tabBars: [{
					name: '互关',
					id: 'huguan',
					num: 10
				}, {
					name: '关注',
					id: 'guanzhu',
					num: 10
				}, {
					name: '粉丝',
					id: 'fensi',
					num: 10
				}],
				friendList: [{
					headImg: "/static/userpic/10.jpg",
					nickName: "60King",
					sex: 0,
					age: 25,
					isAttention: false
				}, {
					headImg: "/static/userpic/11.jpg",
					nickName: "木壳果儿",
					sex: 1,
					age: 28,
					isAttention: true
				}, {
					headImg: "/static/userpic/12.jpg",
					nickName: "小花生不上课",
					sex: 1,
					age: 30,
					isAttention: false
				}, {
					headImg: "/static/userpic/13.jpg",
					nickName: "极尔文化",
					sex: 0,
					age: 25,
					isAttention: true
				}]
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
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
