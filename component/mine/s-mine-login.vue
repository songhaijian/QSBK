<template>
	<view class="login_wrap">
		<view class="head_img_wrap">
			<image src="../../static/userpic/2.jpg" mode="widthFix"></image>
		</view>
		<view class="login_middle_wrap">
			<view class="login_nickname">
				楚绵
			</view>
			<view class="login_count_wrap">
				<view class="all_count">
					总访客0
				</view>
				<view class="today_num">
					今日0
				</view>
			</view>
		</view>
		<view class="iconfont icon-jinru">

		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.login_wrap {
		display: flex;
		padding: 20rpx;
		align-items: center;

		.head_img_wrap {
			image {
				width: 100rpx;
				height: 100prx;
				border-radius: 50%;
			}
		}

		.login_middle_wrap {
			flex: 1;
			margin-left: 20rpx;

			.login_nickname {}

			.login_count_wrap {
				display: flex;
				color: #929292;

				.all_count {}

				.today_num {}
			}
		}

		.icon-jinru {}
	}
</style>
