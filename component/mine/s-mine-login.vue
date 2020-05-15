<template>
	<view class="login_wrap" @click="handleUserSpace">
		<view class="head_img_wrap">
			<image :src="getHeadImg" mode="aspectFill"></image>
		</view>
		<view class="login_middle_wrap">
			<view class="login_nickname">
				{{userInfo.username}}
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
	export default {
		props:{
			userInfo:Object
		},
		methods:{
			handleUserSpace(){
				uni.navigateTo({
					url:"/pages/mine/mine-user-space/mine-user-space"
				})
			}
		},
		computed:{
			getHeadImg() {
				if (this.userInfo.userpic == null) {
					return "/static/userpic/12.jpg"
				} else {
					return this.userInfo.userpic
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login_wrap {
		display: flex;
		padding: 20rpx;
		align-items: center;

		.head_img_wrap {
			image {
				width: 100rpx;
				height: 100rpx;
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
