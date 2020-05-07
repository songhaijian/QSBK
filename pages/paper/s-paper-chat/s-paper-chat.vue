<template>
	<view>
		<scroll-view scroll-y="true" class="chat_list_wrap" :style="{height:scHeight+'px'}" :scroll-top="scrollTop">
			<block v-for="(chatItem,chatIndex) in chatList" :key="chatIndex">
				<s-paper-chat-list-item :chatItem="chatItem"></s-paper-chat-list-item>
			</block>
		</scroll-view>
		<s-paper-friend-bottom-chat @sendChat="handleSendChat"></s-paper-friend-bottom-chat>
	</view>
</template> 

<script>
	import sPaperFriendBottomChat from "../../../component/paper/s-paper-friend-bottom-chat.vue"
	import sPaperChatListItem from "../../../component/paper/s-paper-chat-list-item.vue"
	import time from "../../../commen/time.js"
	export default {
		components: {
			sPaperFriendBottomChat,
			sPaperChatListItem
		},
		onLoad() {
			let oldChatList = [{
				headImg: "/static/userpic/11.jpg",
				msgType: "text",
				time: "1577811661",
				isMe: false,
				textMsg: "大师傅士大夫肯定是付款节点是否",
				imgMsg: ""
			}, {
				headImg: "/static/userpic/11.jpg",
				msgType: "img",
				time: "1577812661",
				isMe: true,
				textMsg: "",
				imgMsg: "/static/banner1.jpg"
			}, {
				headImg: "/static/userpic/12.jpg",
				msgType: "img",
				time: "1577812661",
				isMe: true,
				textMsg: "大师傅士大夫肯定是付款节点是否",
				imgMsg: "/static/banner2.jpg"
			}, {
				headImg: "/static/userpic/12.jpg",
				msgType: "text",
				time: "1577812661",
				isMe: false,
				textMsg: "大师傅士大夫肯定是付款节点是否",
				imgMsg: "/static/banner2.jpg"
			}]
			oldChatList.forEach((v, index) => {
				v.newTime = time.gettime.getChatTime(v.time, index == 0 ? 0 : oldChatList[index - 1].time)
			})
			this.chatList = oldChatList
			uni.getSystemInfo({
				success: (res) => {
					this.scHeight = res.windowHeight - uni.upx2px(120)
				}
			})
		},
		data() {
			return {
				chatList: [],
				scrollTop: 0,
				scHeight: 0
			}
		},
		onReady() {
			this.handlePageToBottom()
		},
		methods: {
			handleSendChat(value) {
				let nowTime = new Date().getTime()
				let inputObj = {
					headImg: "/static/userpic/12.jpg",
					msgType: "text",
					time: nowTime,
					isMe: true,
					textMsg: value,
					imgMsg: "/static/banner2.jpg"
				}
				this.chatList.push(inputObj)
				this.handlePageToBottom()
			},
			handlePageToBottom() {
				let selectQuery = uni.createSelectorQuery()
				selectQuery.select(".chat_list_wrap").boundingClientRect()
				selectQuery.selectAll(".chat_wrap").boundingClientRect()
				selectQuery.exec((res) => {
					res[1].forEach(v => {
						this.scrollTop += v.height
					})

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat_list_wrap {
		// margin-bottom: 120rpx;
	}
</style>
