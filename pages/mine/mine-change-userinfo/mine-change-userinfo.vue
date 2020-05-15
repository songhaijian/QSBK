<template>
	<view class="info_wrap">
		<block v-for="(infoItem,infoIndex) in infoList" :key="infoIndex">
			<s-mine-change-userinfo-item :itemData="infoItem" :itemIndex="infoIndex" @handleItemClick="handleItemClick"></s-mine-change-userinfo-item>
		</block>
		<button type="default" class="btn_enable" @click="handleConfirm">完成</button>
	</view>
</template>

<script>
	import sMineChangeUserinfoItem from "../../../component/mine/s-mine-change-userinfo-item.vue"
	let sexArr = ['男', '女', '未知']
	let qgArr = ['已婚', '未婚', '保密']
	let jobArr = ['IT', '医生', '教师', '保安', '司机']
	export default {
		components: {
			sMineChangeUserinfoItem
		},
		onLoad() {
			uni.getStorage({
				key: "userinfo",
				complete: (res) => {
					this.userInfo = JSON.parse(res.data)
					console.log(this.userInfo)
					//头像
					this.infoList[0].img = this.userInfo.userpic
					//昵称
					this.infoList[1].text = this.userInfo.username
					//性别(2)
					this.infoList[2].index = this.userInfo.userinfo.sex
					this.infoList[2].text = sexArr[this.userInfo.userinfo.sex]
					//生日
					this.infoList[3].text = this.userInfo.userinfo.birthday
					//情感(4)
					this.infoList[4].index = this.userInfo.userinfo.qg
					this.infoList[4].text = qgArr[this.userInfo.userinfo.qg]
					//职业(5)
					this.infoList[5].text = this.userInfo.userinfo.job
					//家乡
					this.infoList[6].text = this.userInfo.userinfo.path
				}
			})
		},
		data() {
			return {
				userInfo: {},
				infoList: [{
					title: "头像",
					type: "img",
					img: ""
				}, {
					title: "昵称",
					type: "input",
					text: ""
				}, {
					title: "性别",
					type: "text",
					text: "不限",
					index: ""
				}, {
					title: "生日",
					type: "birthday",
					text: "2019-03-18"
				}, {
					title: "情感",
					type: "text",
					text: "已婚",
					index: ""
				}, {
					title: "职业",
					type: "text",
					text: "",
				}, {
					title: "家乡",
					type: "text",
					text: ""
				}]
			}
		},
		methods: {
			async handleItemClick(value) {
				switch (value) {
					case 0:
						//头像
						var imgRes = await uni.chooseImage({
							count: 1
						})
						await uni.showLoading({
							title: "上传中..."
						})
						var upRes = await uni.uploadFile({
							url: this.config.BASE_URL + "edituserpic",
							filePath: imgRes[1].tempFilePaths[0],
							name: "userpic",
							header: {
								token: this.userInfo.token
							}
						})
						await uni.hideLoading()
						this.infoList[value].img = JSON.parse(upRes[1].data).data
						this.userInfo.userpic = this.infoList[value].img
						await uni.showToast({
							title: JSON.parse(upRes[1].data).msg
						})
						uni.setStorage({
							key: "userinfo",
							data: JSON.stringify(this.userInfo)
						})
						break;
					case 1:
						//昵称
						break;
					case 2:
						//性别
						this.showSheetDialog(2, sexArr)
						break;
					case 3:
						//生日
						break;
					case 4:
						//情感
						this.showSheetDialog(4, qgArr)
						break;
					case 5:
						//职业
						this.showSheetDialog(5, jobArr)
						break;
					case 6:
						//家乡
						break;
					default:
						break;
				}
			},
			showSheetDialog(selectIndex, arr) {
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						if (selectIndex == 2 || selectIndex == 4) {
							this.infoList[selectIndex].index = res.tapIndex
						}
						this.infoList[selectIndex].text = arr[res.tapIndex]
					}
				});
			},
			handleConfirm() {
				this.request({
					url: this.config.BASE_URL + "edituserinfo",
					method: "post",
					data: {
						name: this.infoList[1].text,
						sex: this.infoList[2].index,
						birthday: this.infoList[3].text,
						qg: this.infoList[4].index,
						job: this.infoList[5].text,
						path: this.infoList[6].text
					},
					header: {
						token: this.userInfo.token
					}
				}).then(res => {
					uni.showToast({
						title: res.msg,
						success: () => {
							this.userInfo.username = this.infoList[1].text
							this.userInfo.userinfo.sex = this.infoList[2].index
							this.userInfo.userinfo.birthday = this.infoList[3].text
							this.userInfo.userinfo.qg = this.infoList[4].index
							this.userInfo.userinfo.job = this.infoList[5].text
							this.userInfo.userinfo.path = this.infoList[6].text
							uni.setStorage({
								key: "userinfo",
								data: JSON.stringify(this.userInfo),
								success: () => {
									uni.navigateBack({
										delta: 1
									})
								}
							})
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info_wrap {
		padding: 0 20rpx;

		.btn_enable {
			margin-top: 20rpx;
			background-color: #ffe933;
			color: #000000;
			font-size: 35rpx;
		}
	}
</style>
