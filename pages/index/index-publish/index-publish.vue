<template>
	<view>
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
			this.$nextTick(() => {
				this.$refs['showpopup'].open()
			})
		},
		data() {
			return {
				titleText: "所有人可见",
				showSaveDialog: true,
				editText: "",
				imgList: []
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
						this.titleText = itemArray[res.tapIndex]
					}
				});
			},
			//发布按钮
			handlePublish() {
				console.log("发布按钮")
			},
			//选择图片
			handleSelectImg(imgList) {
				this.imgList = imgList
				console.log(imgList)
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
</style>
