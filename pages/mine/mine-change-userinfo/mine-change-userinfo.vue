<template>
	<view class="info_wrap">
		<block v-for="(infoItem,infoIndex) in infoList">
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
		data() {
			return {
				infoList: [{
					title: "头像",
					type: "img",
					img: "/static/userpic/11.jpg"
				}, {
					title: "昵称",
					type: "input",
					text: "哈哈"
				}, {
					title: "性别",
					type: "text",
					text: "不限"
				}, {
					title: "生日",
					type: "birthday",
					text: "2019-03-18"
				}, {
					title: "情感",
					type: "text",
					text: "已婚"
				}, {
					title: "职业",
					type: "text",
					text: "IT"
				}, {
					title: "家乡",
					type: "text",
					text: "广东广州"
				}]
			}
		},
		methods: {
			handleItemClick(value) {
				switch (value) {
					case 0:
						//头像
						uni.chooseImage({
							count: 1,
							success: (res) => {
								this.infoList[value].img = res.tempFilePaths[0]
							}
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
			showSheetDialog(index, arr) {
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this.infoList[index].text = arr[res.tapIndex]
					}
				});
			},
			handleConfirm() {
				console.log(JSON.stringify(this.infoList))
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
