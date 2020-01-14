<template>
	<view>
		<view class="card_1_box" @click="outPut(getData.code)" v-if="showView == 2">
			<image class="card_1_img" :src="getData.img" mode='aspectFill'></image>
			<view class="card_1_des">
				<view class="card_1_des_1">{{getData.describe}}</view>
				<view class="card_1_des_2">
					<span class='card_1_des_2_pr'>￥</span>
					<span class='card_1_des_2_pres'>{{getData.prices}}</span>
				</view>
				<view class="clear"></view>
			</view>
		</view>
		<view class="card_1_box" @click="outPut(item.code)" v-if="showView == 1" v-for="(item,i) in dataList" :key="i">
			<image class="card_1_img" :src="item.img" mode='aspectFill'></image>
			<view class="card_1_des">
				<view class="card_1_des_1">{{item.describe}}</view>
				<view class="card_1_des_2">
					<span class='card_1_des_2_pr'>￥</span>
					<span class='card_1_des_2_pres'>{{item.prices}}</span>
				</view>
				<view class="clear"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getData: [],
				/**
				 * 结构
				 * {
					 img:'',//图片
					 describe:'',//描述
					 prices:'',//价格
					 code:''//识别码
					}
				 */
				showView: 0
			};
		},
		props: {
			dataList: '',
		},
		mounted() {
			console.log(Object.prototype.toString.call(this.dataList).replace("]", "").slice(8).trim());
			if (Object.prototype.toString.call(this.dataList).replace("]", "").slice(8).trim() == 'Array') {
				this.getData = this.dataList;
				this.showView = 1;
			} else {
				this.getData = this.dataList;
				this.showView = 2;
			}
		},
		methods: {
			outPut(code) {
				this.$emit('code', code);
			}
		}
	}
</script>

<style>
	.clear {
		clear: both;
		display: block;
	}

	.card_1_box {
		margin-top: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
		width: 100%;
		background-color: #FFFFFF;
	}

	.card_1_img {
		width: 100%;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		max-height: 400rpx;
	}

	.card_1_des {
		padding: 20rpx 0 30rpx;
	}

	.card_1_des_1 {
		display: inline-block;
		font-size: 24rpx;
		color: #999999;
		line-height: 30rpx;
		width: 68%;
		padding-left: 2%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border-right: 1px solid #999;
		float: left;
	}

	.card_1_des_2 {
		display: inline-block;
		font-size: 24rpx;
		color: #999999;
		line-height: 30rpx;
		width: calc(26% - 2px);
		padding-left: 4%;
		float: right;
	}

	.card_1_des_2_pre {
		font-size: 24rpx;
		margin-right: 4rpx;
	}

	.card_1_des_2_pres {
		font-size: 30rpx;
		color: #ff6000;
	}
</style>
