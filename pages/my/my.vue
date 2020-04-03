<template>
	<view>
		<!-- <cardTwo :dataList = 'dataList'></cardTwo> -->
		<view class="imageBackgroud">
			<image :src="backgroundImg" :style="'width: 100%; height:' + height + 'px;'" mode="aspectFill"></image>
		</view>
		<scroll-view class="scroll_view" scroll-y="true" :style="'height:' + height + 'px;'">
			<view class="user_data">
				11111111
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import headBar from "../../components/components/headBar.vue";
	import cardOne from "../../components/components/index_card_content.vue";
	export default {
		data() {
			return {
				backgroundImg:'http://t7.baidu.com/it/u=3617551227,359100887&fm=79&app=86&f=JPEG?w=1280&h=1017',//背景图
				height:0,
				userData:{
					
				}
			}
		},
		components: {
			cardTwo,
		},
		onLoad() {
			let that = this;
			uni.getStorage({
			    key: 'getSystemInfo',
			    success: function (res) {
					console.log(res);
			        that.height = res.data.screenHeight;
			    }
			});
		},
		methods: {
		}
	}
</script>

<style>
	page{
		background-color: #ececec;
	}
	.imageBackgroud{
		position: fixed;
		top: 0;
		overflow: hidden;
		width: 100%;
		height: 100%;
		z-index: 10;
	}
	.scroll_view{
		position: fixed;
		top: 0;
		z-index: 11;
	}
	.user_data{
		margin-top: 600rpx;
		background-color: #FFFFFF;
	}
</style>
