<template>
	<view>
		<index-detail-item :item="itemData" class="index_detail_top"></index-detail-item>
		<view class="comment_list_wrap" v-if="commentList.length>0">
			<view class="comment_count_wrap">
				最新评论 {{commentList.length}}
			</view>
			<block v-for="(commentItem,commentIndex) in commentList" :key="commentIndex">
				<s-index-detail-comment-item :commentItem="commentItem"></s-index-detail-comment-item>
			</block>
		</view>
		<view class="bottom_chat_wrap">

		</view>
		<s-paper-friend-bottom-chat @sendChat="handleSendChat"></s-paper-friend-bottom-chat>
		<s-share-dialog :showShareDialog="showShareDialog" :shareList="providerList" @showDialog="handleShowShareDialog"></s-share-dialog>
	</view>
</template>

<script>
	import indexDetailItem from "../../../component/index/index-detail-item.vue"
	import timeUtils from "../../../commen/time.js"
	import sIndexDetailCommentItem from "../../../component/index/s-index-detail-comment-item.vue"
	import sPaperFriendBottomChat from "../../../component/paper/s-paper-friend-bottom-chat.vue"
	import sShareDialog from "../../../component/common/s-share-dialog.vue"
	export default {
		components: {
			indexDetailItem,
			sIndexDetailCommentItem,
			sPaperFriendBottomChat,
			sShareDialog
		},
		data() {
			return {
				// 图文
				itemData: {},
				commentList: [],
				shareList: [{
						type: "微信好友",
						icon: "weixin"
					}, {
						type: "朋友圈",
						icon: "xiaoxi"
					}, {
						type: "新浪微博",
						icon: "xinlangweibo"
					},
					{
						type: "QQ好友",
						icon: "QQ"
					}
				],
				showShareDialog: false,
				providerList: []
			}
		},
		onLoad(options) {
			this.itemData = JSON.parse(options.indexItem)
			uni.setNavigationBarTitle({
				title: this.itemData.content
			})
			this.getCommentList()
			this.getShareList()
		},
		methods: {
			//发送评论
			handleSendChat(value) {
				let nowTime = new Date().getTime()
				let sendCommentObj = {
					id: 4,
					pId: 0,
					headImg: "/static/userpic/14.jpg",
					userName: "飞屋睿",
					commentContent: value,
					newTime: timeUtils.gettime.gettime(nowTime)
				}
				this.commentData.commentList.push(sendCommentObj)
			},
			//分享弹窗
			handleShowShareDialog() {
				this.showShareDialog = !this.showShareDialog
			},
			//获取评论列表
			getCommentList() {
				this.request({
					url: this.config.BASE_URL + "post/" + this.itemData.id + "/comment"
				}).then(res => {
					let tempCommentList = res.data.list
					while (this.commentList.length != tempCommentList.length) {
						tempCommentList.forEach(v => {
							if (v.fid == 0) {
								this.commentList.push(v)
								tempCommentList.forEach(childItem => {
									if (v.id == childItem.fid) {
										this.commentList.push(childItem)
									}
								})
							}
						})
					}
				})
			},
			//获取分享列表
			getShareList() {
				uni.getProvider({
					service: 'share',
					success: (e) => {
						let data = []
						for (let i = 0; i < e.provider.length; i++) {
							switch (e.provider[i]) {
								case 'weixin':
									data.push({
										name: '微信好友',
										id: 'weixin',
										sort: 0,
										icon: "weixin"
									})
									data.push({
										name: '朋友圈',
										id: 'weixin',
										type: 'WXSenceTimeline',
										sort: 1,
										icon: "xiaoxi"
									})
									break;
								case 'sinaweibo':
									data.push({
										name: '新浪微博',
										id: 'sinaweibo',
										sort: 2,
										icon: "xinlangweibo"
									})
									break;
								case 'qq':
									data.push({
										name: 'QQ好友',
										id: 'qq',
										sort: 3,
										icon: "QQ"
									})
									break;
								default:
									break;
							}
						}
						this.providerList = data.sort((x, y) => {
							return x.sort - y.sort
						});
					},
					fail: (e) => {
						console.log('获取分享通道失败', e);
						uni.showModal({
							content: '获取分享通道失败',
							showCancel: false
						})
					}
				});
			}
		},
		onNavigationBarButtonTap: function(res) {
			this.showShareDialog = !this.showShareDialog
		}
	}
</script>

<style lang="scss" scoped>
	.index_detail_top {
		border-bottom: 2rpx solid #eeeeee;
	}

	.comment_list_wrap {
		padding: 20rpx;

		.comment_count_wrap {
			color: #000000;
			font-size: 30rpx;
			font-weight: 600;
		}
	}

	.bottom_chat_wrap {
		height: 100rpx;
	}
</style>
