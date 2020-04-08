<template>
	<view class="content">
		<view :class="'content_top' + themeContent ">
			<view :class="'content_top_content' + themeContent" :style="'background-color: '+ styleData.themeColor +';'">
				<view class="content_top_title">
					<view class="content_top_title_Cn">
						发现
					</view>
					<view class="content_top_title_En">
						find
					</view>
				</view>
				<view class="content_top_swiper" v-if="themeContent == 0">
					<swiper class="content_top_swiper_box" :indicator-dots="false" 
							:autoplay="true" 
							:interval="5000" 
							:duration="1000"
							:vertical="true"
							:circular="true"
							>
						<swiper-item class="content_top_swiper_swiper" v-for="(item, index) in getHttpData.contentTopSwiper" :key="index">
							<view class="content_top_swiper_swiper-item">
								<image class="content_top_swiper_swiper-item-img" :src="STATIC( 'find/triangle.png')" mode='aspectFill'></image>
							{{getEllipsis(30,item.text)}}</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="content_top_scroll" v-if="themeContent == 1">
					<scroll-view class="content_top_scroll_box"  scroll-y="true"  >
						<view class="content_top_scroll_item" v-for="(item, index) in getHttpData.contentTopSwiper" :key="index">
							<image class="content_top_swiper_swiper-item-img" :src="STATIC( 'find/triangle.png')" mode='aspectFill'></image>
							{{item.text}}
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="content_top_bottom" @click="themeContentFun0()">
				<image v-if="themeContent == 1" class="closeOrOpen_close" :src="STATIC( themeContent == 1 ? 'find/close.png' : 'find/open.png')" mode='aspectFill'></image>
			</view>
		</view>
		<view class="content_bottom" :style="'height: '+styleData.windowHeight+';'">
			<view class="content_bottom_top" @click="themeContentFun1()" :style="'background-color: '+ styleData.themeColor +';'">
				<image v-if="themeContent == 0" class="closeOrOpen_open" :src="STATIC( themeContent == 1 ? 'find/close.png' : 'find/open.png')" mode='aspectFill'></image>
			</view>
			<view class="content_bottom_content">
				<view class="content_bottom_nav">
					<scroll-view class="content_bottom_nav_scroll" scroll-x="true">
						<view class="content_bottom_nav_item" @click="choiceNav(index)" :class="{'content_bottom_nav_item_select': item.select}" v-for="(item, index) in getHttpData.navigation" :key="index" >
							{{item.title}}
						</view>
					</scroll-view>
				</view>
				<view class="content_bottom_con">
					<scroll-view class="content_bottom_con_box" scroll-y="true" >
						<view class="content_bottom_item">
							
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>
<style>
	.content_bottom_nav{
		margin-left: 120rpx;
		margin-top: 60rpx;
		margin-right: 37.5rpx;
	}
	.content_bottom_nav_scroll{
		white-space: nowrap;
		display: flex;
	}
	.content_bottom_nav_item{
		white-space: nowrap;
		display: inline-block;
		height: 60rpx;
		font-size: 32rpx;
		line-height: 60rpx;
		margin-right: 20rpx;
		transition: font-size 0.3s;
		-moz-transition: font-size 0.3s;
		/* Firefox 4 */
		-webkit-transition: font-size 0.3s;
		/* Safari 和 Chrome */
		-o-transition: font-size 0.3s;
		/* Opera */
	}
	.content_bottom_nav_item_select{
		font-size: 42rpx;
		transition: font-size 0.3s;
		-moz-transition: font-size 0.3s;
		/* Firefox 4 */
		-webkit-transition: font-size 0.3s;
		/* Safari 和 Chrome */
		-o-transition: font-size 0.3s;
		/* Opera */
	}
	.content_bottom_con{
		width: 90%;
		margin: 0 auto;
	}
	.content_bottom_con_box{
		
	}
	/* 内容 */
	.content{
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.closeOrOpen_close{
		position: absolute;
		bottom: 0rpx;
		right: 20rpx;
		width: 60rpx;
		height: 60rpx;
		opacity: 0.6;
	}
	.closeOrOpen_open{
		position: absolute;
		top: 10rpx;
		left: 20rpx;
		width: 60rpx;
		height: 60rpx;
		opacity: 0.6;
	}
	/* 上部内容 */
	.content_top0{
		position: relative;
		height: 260rpx;
		transition: height 0.6s;
		overflow: hidden;
		-moz-transition: height 0.6s;
		/* Firefox 4 */
		-webkit-transition: height 0.6s;
		/* Safari 和 Chrome */
		-o-transition: height 0.6s;
		/* Opera */
	}
	.content_top1{
		position: relative;
		height: 98%;
		transition: height 0.6s;
		overflow: hidden;
		-moz-transition: height 0.6s;
		/* Firefox 4 */
		-webkit-transition: height 0.6s;
		/* Safari 和 Chrome */
		-o-transition: height 0.6s;
		/* Opera */
	}
	.content_top_content0{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 600rpx;
		height: 100%;
		border-bottom-right-radius: 300rpx  260rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}
	.content_top_content1{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		border-bottom-right-radius: 300rpx  260rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}
	.content_top_bottom{
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	
	.content_top_title{
		height: 80rpx;
		position: relative;
		margin-top: 60rpx;
		margin-left: 37.5rpx;
		color: #FFFFFF;
	}
	.content_top_title_Cn{
		position: absolute;
		top: 0;
		font-size: 36rpx;
		float: left;
	}
	.content_top_title_En{
		position: absolute;
		top: 26rpx;
		left: 80rpx;
		font-size: 16rpx;
		float: left;
		margin-left: 10rpx;
	}
	.content_top_swiper{
		margin-left: 37.5rpx;
	}
	.content_top_swiper_swiper,.content_top_swiper_box,.content_top_swiper_swiper-item{
		width: 450rpx;
		height: 100rpx;
		font-size: 26rpx;
		border-bottom-right-radius: 300rpx 150rpx;
		color: #FFFFFF;
		/* display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden; */
		letter-spacing: 0;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;  /*要显示的行数*/
		-webkit-box-orient: vertical;
	}
	.content_top_swiper_swiper-item-img{
		width: 20rpx;
		height: 20rpx;
	}
	.content_top_scroll{
		width: 675rpx;
		height: calc(100% - 200rpx);
		margin-left: 37.5rpx;
		margin-top: 30rpx;
		border-bottom-right-radius: 300rpx;
		overflow: hidden;
	}
	.content_top_scroll_box{
		width: 675rpx;
		height: 100%;
		border-bottom-right-radius: 300rpx;
	}
	.content_top_scroll_item{
		color: #FFFFFF;
		font-size: 26rpx;
		margin-top: 20rpx;
		line-height: 30rpx;
		text-align: justify;
	}
	/* 下部内容 */
	.content_bottom{
		position: relative;
	}
	.content_bottom_top{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 260rpx;
		z-index: 99;
	}
	.content_bottom_content{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		border-top-left-radius: 300rpx  260rpx;
	}
</style>
<script>
	import api from "common/api.js";
	import req from "common/req.js";
	export default {
		data() {
			return {
				getEllipsis:api.getEllipsis,
				//统一静态图片路径
				STATIC: api.STATIC,
				//文本滚动内容
				contentTopSwiper:'',
				//主题内容
				themeContent:0,//0 为上部内容为主，1 为下部内容为主
				//控制样式的数据
				styleData:{
					windowHeight:0,
					//主题颜色
					themeColor: "#caf29c",
				},
				getHttpData:{
					contentTopSwiper:[
						{
							text:'你好，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好2，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好3，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
						{
							text:'你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute:''
						},
					],
					//信息与导航
					navigation:[
						{
							title:"收藏",
							goods:5,
							select:true
						},
						{
							title:"推荐",
							goods:5,
							select:false
						},
						{
							title:"景和山庄",
							goods:5,
							select:false
						},
						{
							title:"田园山庄",
							goods:5,
							select:false
						},
						{
							title:"推荐",
							goods:5,
							select:false
						},
						{
							title:"景和山庄",
							goods:5,
							select:false
						},
						{
							title:"田园山庄",
							goods:5,
							select:false
						},
						{
							title:"推荐",
							goods:5,
							select:false
						},
						{
							title:"景和山庄",
							goods:5,
							select:false
						},
						{
							title:"田园山庄",
							goods:5,
							select:false
						},
					],
					goodsData:[
						{
							imgUrl:'',
							title:'好的哈哈哈哈哈',
							price:100,
							id:'1111',
						},
						
					]
					
				}
			}
		},
		onLoad() {
			var that = this;
			//获取屏幕的高度
			uni.getSystemInfo({
			    success: function (res) {
			        that.styleData.windowHeight = (res.windowHeight * 750) / res.windowWidth + 'rpx';
			    }
			});
		},
		methods: {
			//更换主题 为主题1
			themeContentFun1(){
				this.themeContent = 1;
			},
			//更换主题 为主题0
			themeContentFun0(){
				this.themeContent = 0;
			},
			//选择导航
			choiceNav(k){
				for (let i = 0; i < this.getHttpData.navigation.length; i++) {
					this.getHttpData.navigation[i].select = false;
				}
				this.getHttpData.navigation[k].select = true;
			},
			logFun(){
				console.log(this.styleData.windowHeight)
			}
		}
	}
</script>


