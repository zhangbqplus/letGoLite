<template>
	<view>
		<view class="card_2_box" @click="outPut(getData.code)" v-if="showView == 2" >
			<view class="card_2_content" :style="'background-color: rgba(' + 
													getData.color.red + ',' + 
													getData.color.green + ',' + 
													getData.color.blue + ',' +
													getData.color.alpha + ');'">
				<view class="card_2_content_content" :style="'color: #' + getData.wordsColor + ';'">
					<view class="card_2_content_content_span" 
						  :style="'border: 1px solid #' + getData.wordsColor + ';'"
					>{{getData.tag}}</view>
					{{getData.content}}
				</view>
				<view class="card_2_content_content_botton" :style="'color: #' + getData.wordsColor + ';'">
					{{getData.number}}人围观,￥{{getData.prices}}
				</view>
			</view>
			<view class="card_2_des">
				<view class="card_2_des_1" v-for="(itemComment,i) in getData.comment" :key="i" >
					<image :src="itemComment.src" mode='aspectFill' ></image>
					<view class="card_2_des_2">
						{{itemComment.content}}
					</view>
					<view class="clear"></view>
				</view>
			</view>
		</view>
		<view class="card_2_box" @click="outPut(item.code)" v-if="showView == 1" v-for="(item,i) in dataList" :key="i">
			<view class="card_2_content" :style="'background-color: rgba(' + 
													item.color.red + ',' + 
													item.color.green + ',' + 
													item.color.blue + ',' +
													item.color.alpha + ');'">
				<view class="card_2_content_content" :style="'color: #' + item.wordsColor + ';'">
					<view class="card_2_content_content_span" 
						  :style="'border: 1px solid #' + item.wordsColor + ';'"
					>{{item.tag}}</view>
					{{item.content}}
				</view>
				<view class="card_2_content_content_botton" :style="'color: #' + item.wordsColor + ';'">
					{{item.number}}人围观,￥{{item.prices}}
				</view>
			</view>
			<view class="card_2_des">
				<view class="card_2_des_1" v-for="(itemComment,i) in item.comment" :key="i" >
					<image :src="itemComment.src" mode='aspectFill' ></image>
					<view class="card_2_des_2">
						{{itemComment.content}}
					</view>
					<view class="clear"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				getData: [],
				showView: 0
			};
		},
		props: {
			dataList: '',
		},
		mounted() {
			if (Object.prototype.toString.call(this.dataList).replace("]", "").slice(8).trim() == 'Array') {
				this.getData = this.dataList;
				this.showView = 1;
			} else {
				this.getData = this.dataList;
				console.log(this.getData);
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

	.card_2_box {
		margin-top: 30rpx;
		border-radius: 10rpx;
		overflow: hidden;
		width: 100%;
		background-color: #FFFFFF;
	}
	
	.card_2_content{
		padding: 26rpx;
	}
	
	.card_2_content_content{
		font-weight: 600;
		font-size: 36rpx;
		line-height: 46rpx;
		text-align: justify;
	}
	
	.card_2_content_content_span{
		font-size: 18rpx;
		height: 32rpx;
		line-height: 32rpx;
		float: left;
		padding: 0 10rpx;
		margin-right: 10rpx;
		margin-top: 4rpx;
	}

	.card_2_content_content_botton{
		padding: 10rpx 0 0 0;
		font-size: 30rpx;
		font-weight: 400;
	}
	
	.card_2_des{
		padding: 26rpx;
	}
	
	.card_2_des_1{
		padding: 10rpx 0 20rpx;
	}
	
	.card_2_des_1 image{
		width: 50rpx;
		height: 50rpx;
		border-radius: 25rpx;
		float: left;
	}
	.card_2_des_2{
		width: 440rpx;
		float: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 28rpx;
		line-height: 48rpx;
		margin-top: 1rpx;
		padding:0 30rpx;
		margin-left: 40rpx;
		background-color: #ECECEC;
		border-bottom-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}
</style>
