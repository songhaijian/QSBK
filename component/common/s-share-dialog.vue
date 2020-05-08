<template>
	<view>
		<view class="share_mask_wrap" v-if="showShareDialog" @click="handleShowShareDialog">

		</view>
		<view class="share_wrap" v-if="showShareDialog">
			<view class="share_text_wrap">
				分享到
			</view>
			<scroll-view class="share_item_scroll" scroll-x="true">
				<block v-for="(shareItem,shareIndex) in shareList" :key="shareIndex">
					<view class="share_item_wrap" @tap="share(shareItem)">
						<view class="iconfont" :class="['icon-'+shareItem.icon,'share_item_icon_'+shareItem.icon]">

						</view>
						<view class="share_item_title">
							{{shareItem.name}}
						</view>
					</view>
				</block>
			</scroll-view>
			<view class="share_text_wrap" @click="handleShowShareDialog">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showShareDialog: Boolean,
			shareList: Array
		},
		data() {
			return {
				title: 'share',
				shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				href: "https://uniapp.dcloud.io",
				image: '',
				shareType: 1,
			}
		},
		methods: {
			handleShowShareDialog() {
				this.$emit('showDialog')
			},
			async share(e) {
				this.$emit('showDialog')
				if (!this.shareText && (this.shareType === 1 || this.shareType === 0)) {
					uni.showModal({
						content: '分享内容不能为空',
						showCancel: false
					})
					return;
				}

				if (!this.image && (this.shareType === 2 || this.shareType === 0)) {
					uni.showModal({
						content: '分享图片不能为空',
						showCancel: false
					})
					return;
				}

				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						uni.showModal({
							content: '已分享',
							showCancel: false
						})
					},
					fail: (e) => {
						uni.showModal({
							content: e.errMsg,
							showCancel: false
						})
					},
					complete: function() {}
				}

				switch (this.shareType) {
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image :
							'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id: 'gh_33446d7f7a26',
							path: '/pages/tabBar/component/component',
							webUrl: 'https://uniapp.dcloud.io',
							type: 0
						};
						break;
					default:
						break;
				}

				if (shareOPtions.type === 0 && plus.os.name === 'iOS') { //如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if (shareOPtions.type === 1 && shareOPtions.provider === 'qq') { //如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
			compress() { //压缩图片 图文分享要求分享图片大小不能超过20Kb
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => { // 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if (file.size > 20480) { // 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content: '分享图片太大,需要请重新选择图片!',
										showCancel: false
									})
								});
							}
						});
					}, (e) => {
						uni.showModal({
							content: '分享图片太大,需要请重新选择图片!',
							showCancel: false
						})
					});
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.share_mask_wrap {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
	}

	.share_wrap {
		position: fixed;
		z-index: 10;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		text-align: center;

		.share_text_wrap {
			padding: 20rpx 0;
			font-size: 30rpx;
		}

		.share_item_scroll {
			white-space: nowrap;
			display: flex;

			.share_item_wrap {
				width: 25%;
				height: 170rpx;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				.share_item_icon_weixin {
					width: 100rpx;
					height: 100rpx;
					background-color: #2ad19b;
					font-size: 50rpx;
					color: #fff;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.share_item_icon_xiaoxi {
					width: 100rpx;
					height: 100rpx;
					background-color: #514d4c;
					font-size: 50rpx;
					color: #fff;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.share_item_icon_xinlangweibo {
					width: 100rpx;
					height: 100rpx;
					background-color: #ee5e5e;
					font-size: 50rpx;
					color: #fff;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.share_item_icon_QQ {
					width: 100rpx;
					height: 100rpx;
					background-color: #5280ce;
					font-size: 50rpx;
					color: #fff;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
</style>
