<template>
	<view class="about_wrap">
		<view class="logo_wrap">
			<image src="../../../static/commen/logo.png" mode="widthFix"></image>
			<view class="about_version">
				version 1.0.0
			</view>
		</view>
		<block v-for="(aboutItem,aboutIndex) in aboutList">
			<s-mine-list-item :listItem="aboutItem"></s-mine-list-item>
		</block>
	</view>
</template>

<script>
	import sMineListItem from "../../../component/mine/s-mine-list-item.vue"
	export default {
		components: {
			sMineListItem
		},
		data() {
			return {
				aboutList: [{
					title: "新版本检测"
				}, {
					title: "仿糗事百科用户协议"
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.about_wrap {
		.logo_wrap {
			text-align: center;

			image {
				width: 70%;
			}

			.about_version {
				color: #EEEEEE;
				border-bottom: 1rpx solid;
				padding-bottom: 10rpx;
			}
		}


	}
</style>
