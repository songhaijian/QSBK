<template>
	<view class="mine_change_info_item" @click="handleItemClick">
		<view class="title">
			{{itemData.title}}
		</view>
		<view class="middle_wrap">
			<image v-if="itemData.type=='img'" :src="itemData.img" mode="aspectFill"></image>
			<view v-if="itemData.type=='text'">
				{{itemData.text}}
			</view>
			<input v-if="itemData.type=='input'" type="text" v-model="itemData.text" />
			<picker v-if="itemData.type=='birthday'" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view>
					{{itemData.text}}
				</view>
			</picker>
		</view>
		<view class="iconfont icon-bianji1">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			itemData: Object,
			itemIndex: Number
		},
		data() {
			return {
				date: this.itemData.text
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			handleItemClick() {
				this.$emit('handleItemClick', this.itemIndex)
			},
			bindDateChange: function(e) {
				this.itemData.text = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine_change_info_item {
		display: flex;
		align-items: center;
		padding: 20rpx;
		border-bottom: 1rpx solid #EEEEEE;

		.title {
			color: #9b9b9b;
			font-weight: bold;
		}

		.middle_wrap {
			flex: 1;
			display: flex;
			justify-content: flex-end;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}

			view {
				color: #3a3a3a;
				font-size: 30rpx;
			}

			input {
				text-align: end;
				width: 100%;
				font-size: 30rpx;
				color: #3a3a3a;
			}
		}

		.icon-bianji1 {
			margin-left: 20rpx;
			color: #9c9c9c;
		}
	}
</style>
