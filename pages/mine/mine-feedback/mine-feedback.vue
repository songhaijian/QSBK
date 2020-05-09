<template>
	<view class="feed_wrap">
		<block v-for="(feedItem,feedIndex) in feedbackList">
			<uni-collapse>
				<uni-collapse-item :open="false" :show-animation="true" :title="feedItem.title">
					<text class="content">{{feedItem.content}}</text>
				</uni-collapse-item>
			</uni-collapse>
		</block>
		<button type="default" class="btn_enable">意见反馈</button>
	</view>
</template>

<script>
	import uniCollapse from "../../../component/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../../component/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				feedbackList: [{
						title: "客服什么时候在线?",
						content: "亲爱的仿糗友，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作事件的咨询反馈会自动转为留言，客服上班后会第一时间回复哦"
					},
					{
						title: "PS，紧急问题可以加官方XXXXXXXXXX进行反馈",
						content: "亲爱的仿糗友，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作事件的咨询反馈会自动转为留言，客服上班后会第一时间回复哦"
					},
					{
						title: "忘记账号/昵称/密码怎么办？",
						content: "亲爱的仿糗友，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作事件的咨询反馈会自动转为留言，客服上班后会第一时间回复哦"
					},
					{
						title: "怎么搜索/查找、关注/取关用户？",
						content: "亲爱的仿糗友，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作事件的咨询反馈会自动转为留言，客服上班后会第一时间回复哦"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.feed_wrap {
		padding: 0 20rpx;

		.content {
			padding: 15px;
			font-size: 14px;
			line-height: 20px;
			background-color: #f9f9f9;
			color: #666;
		}

		.btn_enable {
			margin-top: 20rpx;
			background-color: #ffe933;
			color: #000000;
			font-size: 35rpx;
		}
	}
</style>
