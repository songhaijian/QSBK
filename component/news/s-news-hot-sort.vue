<template>
	<view class="hot_sort_wrap">
		<view class="hot_sort_line1">
			<view class="hot_sort_line1_left">
				热门分类
			</view>
			<view class="hot_sort_line1_right" @click="handleMore">
				更多
				<view class="iconfont icon-jinru">

				</view>
			</view>
		</view>
		<view class="hot_sort_line2">
			<block v-for="(hotSortItem,hotSortIndex) in hotSortTypeList" :key="hotSortIndex">
				<view class="hot_sort_line2_item">
					{{hotSortItem.classname}}
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hotSortTypeList: Array
		},
		methods: {
			handleMore() {
				uni.navigateTo({
					url: "/pages/news/topic-sort/topic-sort"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hot_sort_wrap {
		border-top: 1rpx solid #eee;
		border-bottom: 1rpx solid #eee;
		padding: 20rpx;

		.hot_sort_line1 {
			display: flex;
			justify-content: space-between;

			.hot_sort_line1_left {}

			.hot_sort_line1_right {
				display: flex;
				align-items: center;
				color: #d6d6d6;

				.icon-jinru {}
			}
		}

		.hot_sort_line2 {
			display: flex;

			.hot_sort_line2_item {
				padding: 5rpx 0;
				margin: 0 10rpx;
				display: flex;
				flex: 1;
				justify-content: center;
				align-items: center;
				border-radius: 10rpx;
				background-color: #f7f7f7;
				color: #9e9e9e;
			}
		}
	}
</style>
