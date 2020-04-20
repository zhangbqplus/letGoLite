<template>
	<view>
		<view class="content_top">
			<view class="personal" :style="'color: '+styleData.themeColor+';'">
				<view class="personal_Cn">
					我的
				</view>
				<view class="personal_En">
					personal
				</view>
			</view>
			<view class="content_title">
				<view class="content_title_content">
					{{personalData.title}}
				</view>
				<image :src="personalData.imageSrc" mode='aspectFill'></image>
			</view>
		</view>
		<view class="content">
			<view class="content_pro_box">
			</view>
			<view class="content_content" v-for="(item, index) in navList" :key="index">
				<view class="content_content_title" v-if="item.title">
					{{item.title}}
				</view>
				<view class="content_content_item" :style="'background-color: '+ 
					  (
					  (styleData.cardGradual[0] == index & styleData.cardGradual[1] == i) ? 
					  '#c0c0c0' : '#ffffff'
					  )+';'"
				 @touchstart="cardTouchstart(index,i)" @touchend="cardTouchend(item)" v-for="(it, i) in item.item" :key="i">
					<image class="content_content_item_icon" :src="it.iconSrc"></image>
					<view class="content_content_item_title">
						{{it.title}}
					</view>
					<image class="content_content_item_next" :src="STATIC( 'personal/next.png')" mode=""></image>
				</view>
			</view>
		</view>
		<view class="fixBack" v-if="fixBackShow" @tap="goTop">
			<image :src="STATIC( 'find/backTop.png')" mode='aspectFill'></image>
		</view>
	</view>
</template>
<style>
	.fixBack {
		position: fixed;
		z-index: 150;
		width: 80rpx;
		height: 80rpx;
		bottom: 80rpx;
		right: 50rpx;
		border: 1px solid #C0C0C0;
		background-color: #FFFFFF;
		border-radius: 50%;
	}

	.fixBack image {
		width: 50rpx;
		height: 50rpx;
		padding: 15rpx;
		opacity: 0.4;
	}

	.content_content_item_next {
		width: 40rpx;
		height: 40rpx;
		margin-top: 40rpx;
		float: right;
		opacity: 0.6;
		margin-right: 30rpx;
	}

	.content_content_item_icon {
		width: 60rpx;
		height: 60rpx;
		margin-top: 30rpx;
		margin-left: 30rpx;
		float: left;
	}

	.content_content_item_title {
		float: left;
		width: 385rpx;
		height: 120rpx;
		margin-left: 30rpx;
		line-height: 120rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}

	.content_content_item {
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		border-radius: 30rpx;
		margin: 15rpx 0;
	}

	.content_content_title {
		width: 100%;
		font-size: 32rpx;
		color: #333333;
		height: 100rpx;
		line-height: 100rpx;
	}

	.content {
		width: 90%;
		margin: 0 auto;
	}

	.content_pro_box {
		width: 100%;
		height: 260rpx;
	}

	/* 标题 */
	.content_title {
		width: 90%;
		margin: 0 auto;
		height: 160rpx;
	}

	.content_title_content {
		font-size: 32rpx;
		color: #333333;
		display: inline-block;
		width: 500rpx;
		height: 160rpx;
		line-height: 160rpx;
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}

	.content_title image {
		width: 100rpx;
		height: 100rpx;
		margin-top: 30rpx;
		float: right;
		border-radius: 50%;
	}

	.personal {
		height: 40rpx;
		position: relative;
		margin-top: 60rpx;
		margin-left: 37.5rpx;
	}

	.personal_Cn {
		position: absolute;
		top: 0;
		font-size: 36rpx;
		float: left;
	}

	.personal_En {
		position: absolute;
		top: 22rpx;
		left: 80rpx;
		font-size: 16rpx;
		float: left;
		margin-left: 10rpx;
	}

	page {
		background-color: #eff3f6;
	}

	.content_top {
		position: fixed;
		z-index: 100;
		top: 0;
		height: 260rpx;
		width: 100%;
		background-color: #FFFFFF;

	}
</style>
<script>
	import api from "common/api.js";
	import req from "common/req.js";
	export default {
		data() {
			return {
				//是否出现返回顶部的按钮
				fixBackShow: false,
				//统一静态图片路径
				STATIC: api.STATIC,
				// 样式数据
				styleData: {
					//主题颜色
					themeColor: "#fc6700",
					//卡片渐变
					cardGradual: [-1, -1],
				},
				//头像数据
				personalData: {
					imageSrc: '../../../static/img.jpg',
					title: '我是名称名称啊名称啊名称名称啊名称',
					id: '' //其他属性
				},
				//导航列表
				navList: [{
						title: "我是小标题，也可以没有",
						item: [{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							}
						]
					},
					{
						title: "我是小标题，也可以没有",
						item: [{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							}
						]
					},
					{
						title: "我是小标题，也可以没有",
						item: [{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							},
							{
								iconSrc: "../../../static/img.jpg",
								title: "我是主标题",
								href: "", //调转链接
								src: '' //其他属性
							}
						]
					}
				]
			}
		},
		onPageScroll: function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			//出行返回顶部按钮的监听
			if (e.scrollTop > 700) {
				this.fixBackShow = true;
			} else {
				this.fixBackShow = false;
			}
		},
		methods: {
			//页面回到顶部
			goTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			//选项卡被点击（开始）
			cardTouchstart(index, i) {
				this.styleData.cardGradual[0] = index;
				this.styleData.cardGradual[1] = i;
				this.$forceUpdate();
			},
			//选项卡被点击（结束）
			cardTouchend(e) {
				this.styleData.cardGradual[0] = -1;
				this.styleData.cardGradual[1] = -1;
				this.$forceUpdate();
				console.log("我是卡片被点击的全部数据" + e);
			}
		}
	}
</script>
