<template>
	<view class="tab_bar_wrap">
		<scroll-view :scroll-x="true" class="tab_scroll" :scroll-into-view="scrollInto">
			<block v-for="(item, index) in tabBars" :key="index">
				<!-- view的id必须添加，不然点击item不会自动滑动 -->
				<view :style="itemStyle" class="tab_item_wrap" @click="handleItemClick(index)" :class="tabIndex==index?'active':''"
				 :id="item.id">
					{{item.name}}{{item.num?item.num:''}}
					<view :class="tabIndex==index?'tab_item_divider':''">

					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabIndex: Number,
			tabBars: Array,
			scrollInto: String,
			itemStyle: {
				type: String,
				value: ""
			}
		},
		methods: {
			//TabBar点击事件
			handleItemClick(index) {
				this.$emit('itemClick', index)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tab_bar_wrap {
		padding-right: 20rpx;
		text-align: center;

		.tab_scroll {
			white-space: nowrap; // 滚动必须加的属性
			width: 100%;
			padding: 10rpx 0;
			margin: 0 auto;

			.tab_item_wrap {
				width: 100rpx;
				// padding: 0 20rpx;
				display: inline-block;
				font-size: 30rpx;
				color: #969696;
				font-weight: bold;
				text-align: center;

				.tab_item_divider {
					margin: 0 auto;
					width: 70rpx;
					height: 6rpx;
					background-color: #fede33;
				}
			}

			.active {
				color: #343434;
			}
		}
	}
</style>
