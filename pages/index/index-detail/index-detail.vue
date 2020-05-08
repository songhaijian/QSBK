<template>
	<view>
		<index-detail-item :item="itemData" class="index_detail_top"></index-detail-item>
		<view class="comment_list_wrap">
			<view class="comment_count_wrap">
				最新评论 {{commentData.commentCount}}
			</view>
			<block v-for="(commentItem,commentIndex) in commentData.commentList" :key="commentIndex">
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
				itemData: {
					userPic: "/static/userpic/10.jpg",
					userName: "三鱼先生",
					sex: 1, //0:男 1：女
					age: 25,
					isAttention: false,
					title: "六道快手家常菜,好吃又下饭,家人都喜欢",
					titlePic: "/static/datapic/1.jpg",
					titlePicArr: ["/static/datapic/1.jpg", "/static/datapic/2.jpg", "/static/datapic/3.jpg"],
					video: false,
					share: false,
					path: "深圳 龙岗",
					shareNum: 36,
					commentNum: 27,
					favNum: 9829,
					time: "25天前"
				},
				commentData: {
					commentCount: 20,
					commentList: []
				},
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
				providerList:[]
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: JSON.parse(options.indexItem).content
			})
			let oldCommentList = [{
				id: 1,
				pId: 0,
				headImg: "/static/userpic/10.jpg",
				userName: "飞屋睿",
				commentContent: "35岁程序员,年后第一天被辞退",
				time: 1588874264
			}, {
				id: 2,
				pId: 1,
				headImg: "/static/userpic/11.jpg",
				userName: "飞屋睿",
				commentContent: "35岁程序员,年后第一天被辞退",
				time: 1588924664
			}, {
				id: 3,
				pId: 1,
				headImg: "/static/userpic/12.jpg",
				userName: "飞屋睿",
				commentContent: "35岁程序员,年后第一天被辞退",
				time: 1588925343
			}, {
				id: 4,
				pId: 0,
				headImg: "/static/userpic/14.jpg",
				userName: "飞屋睿",
				commentContent: "35岁程序员,年后第一天被辞退",
				time: 1588925343
			}]
			oldCommentList.forEach(v => {
				v.newTime = timeUtils.gettime.gettime(v.time)
			})
			this.commentData.commentList = oldCommentList
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
									sort:0,
									icon: "weixin"
								})
								data.push({
									name: '朋友圈',
									id: 'weixin',
									type:'WXSenceTimeline',
									sort:1,
									icon: "xiaoxi"
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '新浪微博',
									id: 'sinaweibo',
									sort:2,
									icon: "xinlangweibo"
								})
								break;
							case 'qq':
								data.push({
									name: 'QQ好友',
									id: 'qq',
									sort:3,
									icon: "QQ"
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
		},
		methods: {
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
			handleShowShareDialog() {
				this.showShareDialog = !this.showShareDialog
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
