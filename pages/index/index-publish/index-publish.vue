<template>
	<view class="publish_wrap">
		<!-- 自定义导航栏 -->
		<uni-nav-bar left-icon="arrowleft" :statusBar="true" rightText="发布" @clickLeft="handleBack" @clickRight="handlePublish">
			<view class="nav_title_wrap" @click="handleTitleTypeClick">
				{{titleText}}
				<view class="iconfont icon-xialazhankai">

				</view>
			</view>
		</uni-nav-bar>
		<!-- 输入框 -->
		<view class="publish_input">
			<textarea placeholder="说一句话吧~" v-model="editText"></textarea>
		</view>
		<!-- 上传图片 -->
		<upload-img @selectImg="handleSelectImg"></upload-img>
		<view class="bottom_wrap">
			<picker @change="bindPickerChange" :value="sortIndex" :range="sortArray" class="select_sort_wrap">
				<view>
					{{hintSortText}}
				</view>
			</picker>
			<view class="select_topic_wrap" @click="handleSelectTopic">
				{{hintTopicText}}
			</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="showpopup">
			<view class="pop_wrap">
				<view class="img_wrap">
					<image src="../../../static/commen/addinput.png" mode="widthFix"></image>
				</view>
				<view>
					严禁发表一下信息
				</view>
				<view>
					1、设计黄色,政治,广告及骚扰信息
				</view>
				<view>
					2、涉及人身攻击
				</view>
				<view>
					3、留联系方式,透漏他人隐私
				</view>
				<view>
					一经核实将被封禁,情节严重者永久封禁
				</view>
				<button type="default" @click="handleClosePop">朕知道了</button>
			</view>
		</uni-popup>
	</view>

</template>
<script>
	let itemArray = ['所有人可见', '仅自己可见'];
	import uniNavBar from "../../../component/index/uni-nav-bar.vue";
	import uploadImg from "../../../component/common/upload-img.vue";
	import uniPopup from "../../../component/common/uni-popup.vue"

	export default {
		components: {
			uniNavBar,
			uploadImg,
			uniPopup
		},
		onLoad() {
			uni.$on("backPublish", (e) => {
				console.log(e)
				this.topic_id = e.id
				this.hintTopicText = e.title
			})
			this.$nextTick(() => {
				this.$refs['showpopup'].open()
			})
			uni.getStorage({
				key: "userinfo",
				complete: (res) => {
					if (res.data == null || res.data == '') {
						this.isLogin = false
					} else {
						this.isLogin = true
						this.userInfo = JSON.parse(res.data)
					}
				}
			})
			this.getTabList()
		},
		data() {
			return {
				titleText: "所有人可见",
				showSaveDialog: true,
				editText: "",
				imgList: [],
				isLogin: false,
				userInfo: {},
				imgListId: [],
				sortList: [],
				sortArray: [],
				sortIndex: 0,
				hintSortText: "选择分类",
				hintTopicText: "选择话题",
				post_class_id: -1,
				topic_id: -1,
				isopen: 0
			}
		},
		methods: {
			//返回键
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			//标题点击事件
			handleTitleTypeClick() {
				uni.showActionSheet({
					itemList: itemArray,
					success: (res) => {
						this.titleText = itemArray[res.tapIndex],
							this.isopen = res.tapIndex
					}
				});
			},
			//发布按钮
			handlePublish() {
				if (this.editText == null || this.editText == '') {
					return uni.showToast({
						title: "请输入内容",
						icon: "none"
					})
				}
				if (this.imgListId.length <= 0) {
					return uni.showToast({
						title: "请上传图片",
						icon: "none"
					})
				}
				if (this.post_class_id <= 0) {
					return uni.showToast({
						title: "请选择分类",
						icon: "none"
					})
				}
				if (this.topic_id <= 0) {
					return uni.showToast({
						title: "请选择话题",
						icon: "none"
					})
				}
				this.publish()
			},
			//选择图片
			handleSelectImg(imgList) {
				this.imgList = imgList
				this.uploadImg()
			},
			//上传图片
			async uploadImg() {
				for (var i = 0; i < this.imgList.length; i++) {
					uni.showLoading({
						title: "上传中..."
					})
					var upRes = await uni.uploadFile({
						url: this.config.BASE_URL + "image/uploadmore",
						filePath: this.imgList[i],
						name: "imglist[]",
						header: {
							token: this.userInfo.token
						}
					})
					uni.hideLoading()
					const imgIdObj = {
						id: JSON.parse(upRes[1].data).data.list[0].id
					}
					this.imgListId.push(imgIdObj)
				}
				uni.showToast({
					title: "上传成功"
				})
			},
			publish() {
				console.log(this.imgListId)
				this.request({
					url: this.config.BASE_URL + "post/create",
					method: "post",
					data: {
						imagelist: this.imgListId,
						text: this.editText,
						isopen: this.isopen,
						topic_id: this.topic_id,
						post_class_id: this.post_class_id
					},
					header: {
						token: this.userInfo.token
					}
				}).then(res => {
					console.log(res)
				})
			},
			// 关闭弹窗
			handleClosePop() {
				this.$nextTick(() => {
					this.$refs['showpopup'].close()
				})
			},
			//提示窗
			handleShowSaveDialog() {
				uni.showModal({
					content: "是否要保存为草稿",
					cancelText: "不保存",
					confirmText: "保存",
					success: (res) => {
						if (res.confirm) {
							console.log("保存")
						} else {
							console.log("不保存")
						}
						this.showSaveDialog = false
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			//获取分类列表数据
			getTabList() {
				this.request({
					url: this.config.BASE_URL + "postclass"
				}).then(result => {
					this.sortList = result.data.list
					this.sortList.forEach(v => {
						this.sortArray.push(v.classname)
					})
				})
			},
			bindPickerChange: function(e) {
				this.sortIndex = e.target.value
				this.hintSortText = this.sortArray[e.target.value]
				this.post_class_id = this.sortList[this.sortIndex].id
			},
			handleSelectTopic() {
				uni.navigateTo({
					url: "/pages/news/topic-sort/topic-sort?type=publish"
				})
			}
		},
		onBackPress() {
			if ((this.editText || this.imgList.length > 0) && this.showSaveDialog) {
				this.handleShowSaveDialog()
				return true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav_title_wrap {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.publish_input {
		border: 1rpx solid #EEEEEE;

		textarea {
			width: 100%;
		}
	}

	.pop_wrap {
		border-radius: 10rpx;
		width: 600rpx;
		background-color: #fff;
		padding: 20rpx;

		.img_wrap {
			text-align: center;

			image {
				width: 50%;
			}
		}

		button {
			margin-top: 20rpx;
			background-color: #ffe934;
		}
	}



	.bottom_wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
		border-top: 1rpx solid #eee;

		.select_sort_wrap {
			padding: 20rpx 0;
			flex: 1;
			text-align: center;
		}

		.select_topic_wrap {
			padding: 20rpx 0;
			flex: 1;
			text-align: center;
		}
	}
</style>
