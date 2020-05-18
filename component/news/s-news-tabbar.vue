<template>
	<view>
		<uni-nav-bar :statusBar="showStatusBar" :fixed="showStatusBar">
			<block slot="left">
				<view class="nav_left_wrap">
					<view class="iconfont icon-qiandao">

					</view>
				</view>
			</block>
			<view class="nav_middle_wrap">
				<block v-for="(navItem,index) in navTitles" :key="index">
					<view class="nav_item_wrap" :class="{'nav_middle_active':navIndex==index}" @click="handleTabClick(index)">
						{{navItem.title}}
						<view v-if="navIndex==index" class="nav_item_divider">

						</view>
					</view>
				</block>
			</view>
			<block slot="right">
				<view class="nav_right_wrap" @click="handleClickPublish">
					<view class="iconfont icon-bianji1">

					</view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../index/uni-nav-bar.vue";
	export default {
		components: {
			uniNavBar
		},
		props: {
			navTitles: Array,
			navIndex: Number
		},
		data() {
			return {
				// #ifdef APP-PLUS
				showStatusBar: true
				// #endif
				// #ifndef APP-PLUS
				showStatusBar: false
				// #endif
			}
		},
		methods: {
			handleTabClick(index) {
				this.$emit('tabClick',index)
			},
			//发布按钮
			handleClickPublish() {
				uni.navigateTo({
					url: "../index/index-publish/index-publish"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav_left_wrap {

		.icon-qiandao {
			font-size: 45rpx;
			padding: 0 15rpx;
			color: #ff9619;
		}
	}

	.nav_middle_wrap {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-left: -20rpx;

		.nav_item_wrap {
			position: relative;
			padding: 0 10rpx;
			font-size: 35rpx;
			font-weight: bold;
			color: #969696;

			.nav_item_divider {
				margin: 0 auto;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				width: 80rpx;
				height: 10rpx;
				background-color: #fede33;
				border-radius: 5rpx;
			}
		}

		.nav_middle_active {
			color: #343434;
		}
	}

	.nav_right_wrap {
		display: flex;
		flex: 1;
		justify-content: flex-end;

		.icon-bianji1 {
			font-size: 45rpx;
			padding: 0 15rpx;
			color: #333333;
		}

	}
</style>
