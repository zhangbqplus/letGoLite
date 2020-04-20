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
					<swiper class="content_top_swiper_box" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000"
					 :vertical="true" :circular="true">
						<swiper-item class="content_top_swiper_swiper" v-for="(item, index) in getHttpData.contentTopSwiper" :key="index">
							<view class="content_top_swiper_swiper-item">
								<image class="content_top_swiper_swiper-item-img" :src="STATIC( 'find/triangle.png')" mode='aspectFill'></image>
								{{getEllipsis(30,item.text)}}
							</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="content_top_scroll" v-if="themeContent == 1">
					<scroll-view class="content_top_scroll_box" scroll-y="true">
						<view class="content_top_scroll_item" v-for="(item, index) in getHttpData.contentTopSwiper" :key="index">
							<image class="content_top_swiper_swiper-item-img" :src="STATIC( 'find/triangle.png')" mode='aspectFill'></image>
							{{item.text}}
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="content_top_bottom" @click="themeContentFun0()">
				<image v-if="themeContent == 1" class="closeOrOpen_close" :src="STATIC( themeContent == 1 ? 'find/close.png' : 'find/open.png')"
				 mode='aspectFill'></image>
			</view>
		</view>
		<view class="content_bottom" :style="'height: '+styleData.windowHeight+';'">
			<view class="content_bottom_top" @click="themeContentFun1()" :style="'background-color: '+ styleData.themeColor +';'">
				<image v-if="themeContent == 0" class="closeOrOpen_open" :src="STATIC( themeContent == 1 ? 'find/close.png' : 'find/open.png')"
				 mode='aspectFill'></image>
			</view>
			<view class="content_bottom_content">
				<view class="content_bottom_nav">
					<scroll-view class="content_bottom_nav_scroll" scroll-x="true">
						<view class="content_bottom_nav_item" @click="choiceNav(index,item)" :class="{'content_bottom_nav_item_select': item.select,
										 'content_bottom_nav_item_word_Num1':item.title.length == 1,
										 'content_bottom_nav_item_word_Num2':item.title.length == 2,
										 'content_bottom_nav_item_word_Num3':item.title.length == 3,
										 'content_bottom_nav_item_word_Num4':item.title.length == 4,
										 'content_bottom_nav_item_word_Num5':item.title.length == 5,
										 'content_bottom_nav_item_word_Num6':item.title.length == 6,
										 'content_bottom_nav_item_word_Num7':item.title.length == 7,
										 'content_bottom_nav_item_word_Num8':item.title.length == 8,
										 'content_bottom_nav_item_word_Num9':item.title.length == 9,
										 'content_bottom_nav_item_word_Num10':item.title.length == 10,
										 'content_bottom_nav_item_word_Num11':item.title.length == 11,
										 'content_bottom_nav_item_word_Num12':item.title.length == 12,
										 'content_bottom_nav_item_word_Num13':item.title.length == 13,
										 'content_bottom_nav_item_word_Num14':item.title.length == 14,
										 'content_bottom_nav_item_word_Num15':item.title.length == 15,
										 'content_bottom_nav_item_word_Num16':item.title.length == 16,
										 'content_bottom_nav_item_word_Num17':item.title.length == 17,
										 'content_bottom_nav_item_word_Num18':item.title.length == 18,
										 'content_bottom_nav_item_word_Num19':item.title.length == 19,
										 'content_bottom_nav_item_word_Num20':item.title.length == 20
									}"
						 v-for="(item, index) in getHttpData.navigation" :key="index">
							{{item.title}}
						</view>
					</scroll-view>
				</view>
				<view class="content_bottom_con">
					<scroll-view class="content_bottom_con_box" scroll-y="true" @scroll="upper" scroll-with-animation=true :scroll-top="goodsScrollView.scrollTop">
						<view class="content_bottom_item" v-for="(item, index) in getHttpData.goodsData" :key="index">
							<image class="content_bottom_item_left" :src="item.imgUrl" mode='aspectFill'></image>
							<view class="content_bottom_item_right">
								<view class="content_bottom_item_right_title">
									{{item.title}}
								</view>
								<view class="content_bottom_item_right_price">
									￥ {{item.price}}
								</view>
								<view class="content_bottom_item_right_buy_pro" @click="putCart(index)">
									<view :class="item.select ? '.content_bottom_item_right_buy_opacity' : '.content_bottom_item_right_buy'" :style="'background-color: '+ styleData.themeColor +';'">
										<image :src="STATIC( 'find/buyW.png')" mode='aspectFill'></image>
									</view>
								</view>

							</view>
							<view class="clear">

							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="fixBack" v-if="fixBackShow" @tap="goTop">
				<image :src="STATIC( 'find/backTop.png')" mode='aspectFill'></image>
			</view>
			<!-- <view class="fixBuyNum" v-if="getHttpData.cartData.length != 0" :style="'color:' + styleData.themeColor + '; border: 1px solid ' + styleData.themeColor + ';'">
				{{getHttpData.cartData.length}}
			</view> -->
			<view class="fixBuyNum" v-if="getHttpData.cartData.length != 0" :style="'color:#fff; background-color: ' + styleData.themeColor + ';'">
				{{getHttpData.cartData.length}}
			</view>
			<view class="fixBuy" v-if="getHttpData.cartData.length != 0">
				<image :src="STATIC( 'find/buyB.png')" mode='aspectFill'></image>
			</view>
		</view>
	</view>
</template>
<style>
	.fixBuyNum {
		position: absolute;
		z-index: 151;
		width: 30rpx;
		height: 30rpx;
		bottom: 490rpx;
		right: 66rpx;
		border-radius: 50%;
		font-size: 20rpx;
		line-height: 30rpx;
		text-align: center;
	}

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

	.fixBuy {
		position: absolute;
		z-index: 150;
		width: 80rpx;
		height: 80rpx;
		bottom: 450rpx;
		right: 50rpx;
		border: 1px solid #C0C0C0;
		background-color: #FFFFFF;
		border-radius: 50%;
	}

	.fixBuy image {
		width: 50rpx;
		height: 50rpx;
		padding: 15rpx;
		opacity: 0.6;
	}

	

	/* 内容 */
	.content {
		position: fixed;
		width: 100%;
		height: 100%;
	}

	.closeOrOpen_close {
		position: absolute;
		bottom: 0rpx;
		right: 20rpx;
		width: 60rpx;
		height: 60rpx;
		opacity: 0.6;
	}

	.closeOrOpen_open {
		position: absolute;
		top: 10rpx;
		left: 20rpx;
		width: 60rpx;
		height: 60rpx;
		opacity: 0.6;
	}

	/* 上部内容 */
	.content_top0 {
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

	.content_top1 {
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

	.content_top_content0 {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 600rpx;
		height: 100%;
		border-bottom-right-radius: 300rpx 260rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.content_top_content1 {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		border-bottom-right-radius: 300rpx 260rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.content_top_bottom {
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}

	.content_top_title {
		height: 80rpx;
		position: relative;
		margin-top: 60rpx;
		margin-left: 37.5rpx;
		color: #FFFFFF;
	}

	.content_top_title_Cn {
		position: absolute;
		top: 0;
		font-size: 36rpx;
		float: left;
	}

	.content_top_title_En {
		position: absolute;
		top: 22rpx;
		left: 80rpx;
		font-size: 16rpx;
		float: left;
		margin-left: 10rpx;
	}

	.content_top_swiper {
		margin-left: 37.5rpx;
	}

	.content_top_swiper_swiper,
	.content_top_swiper_box,
	.content_top_swiper_swiper-item {
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
		-webkit-line-clamp: 2;
		/*要显示的行数*/
		-webkit-box-orient: vertical;
	}

	.content_top_swiper_swiper-item-img {
		width: 20rpx;
		height: 20rpx;
	}

	.content_top_scroll {
		width: 675rpx;
		height: calc(100% - 200rpx);
		margin-left: 37.5rpx;
		margin-top: 30rpx;
		border-bottom-right-radius: 300rpx;
		overflow: hidden;
	}

	.content_top_scroll_box {
		width: 675rpx;
		height: 100%;
		border-bottom-right-radius: 300rpx;
	}

	.content_top_scroll_item {
		color: #FFFFFF;
		font-size: 26rpx;
		margin-top: 20rpx;
		line-height: 30rpx;
		text-align: justify;
	}

	/* 下部内容 */
	.content_bottom {
		position: relative;
	}

	.content_bottom_top {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 260rpx;
		z-index: 99;
	}

	.content_bottom_content {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		border-top-left-radius: 300rpx 260rpx;
	}

	/**
	 * 字数与导航宽度 共20档
	 */
	.content_bottom_nav_item_word_Num1 {
		width: 80rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num2 {
		width: 120rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num3 {
		width: 160rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num4 {
		width: 200rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num5 {
		width: 240rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num6 {
		width: 300rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num7 {
		width: 340rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num8 {
		width: 380rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num9 {
		width: 420rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num10 {
		width: 460rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num11 {
		width: 500rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num12 {
		width: 540rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num13 {
		width: 580rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num14 {
		width: 620rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num15 {
		width: 660rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num16 {
		width: 700rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num17 {
		width: 740rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num18 {
		width: 780rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num19 {
		width: 820rpx;
		text-align: center;
	}

	.content_bottom_nav_item_word_Num20 {
		width: 860rpx;
		text-align: center;
	}

	.content_bottom_nav {
		margin-left: 120rpx;
		margin-top: 60rpx;
		margin-right: 37.5rpx;
	}

	.content_bottom_nav_scroll {
		white-space: nowrap;
		display: flex;
	}

	.content_bottom_nav_item {
		white-space: nowrap;
		display: inline-block;
		height: 60rpx;
		font-size: 32rpx;
		line-height: 60rpx;
		transition: font-size 0.3s;
		-moz-transition: font-size 0.3s;
		/* Firefox 4 */
		-webkit-transition: font-size 0.3s;
		/* Safari 和 Chrome */
		-o-transition: font-size 0.3s;
		/* Opera */
	}

	.content_bottom_nav_item_select {
		font-size: 42rpx;
		transition: font-size 0.3s;
		-moz-transition: font-size 0.3s;
		/* Firefox 4 */
		-webkit-transition: font-size 0.3s;
		/* Safari 和 Chrome */
		-o-transition: font-size 0.3s;
		/* Opera */
	}

	.content_bottom_con {
		width: 90%;
		margin: 0 auto;
		height: calc(100% - 260rpx);
		margin-top: 30rpx;
	}
	.content_bottom_item_right_buy_pro {
		width: 150rpx;
		height: 150rpx;
	}
	
	.content_bottom_item_right_buy {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}
	.content_bottom_item_right_buy_opacity {
		width: 60rpx;
		height: 60rpx;
		opacity: 0.4;
		border-radius: 50%;
	}
	
	.content_bottom_item_right_buy image,.content_bottom_item_right_buy_opacity image {
		width: 30rpx;
		height: 30rpx;
		padding: 15rpx;
		border-radius: 50%;
	}
	
	.content_bottom_con_box {
		height: 100%;
		width: 100%;
	}
	
	.content_bottom_item {
		margin-top: 30rpx;
	}
	
	.content_bottom_item_left {
		width: 280rpx;
		height: 364rpx;
		border-radius: 30rpx;
		float: left;
	}
	
	.content_bottom_item_right {
		width: 350rpx;
		height: 364rpx;
		overflow: hidden;
		float: right;
	}
	
	.content_bottom_item_right_title {
		font-size: 32rpx;
		line-height: 50rpx;
		font-weight: bold;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 80rpx;
		padding-top: 30rpx;
	}
	
	.content_bottom_item_right_price {
		height: 60rpx;
		font-size: 32rpx;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
<script>
	import api from "common/api.js";
	import req from "common/req.js";
	export default {
		data() {
			return {
				//商品scroll-view参数
				goodsScrollView: {
					scrollTop: 0,
					old: {
						scrollTop: 0
					}
				},
				//是否出现返回顶部的按钮
				fixBackShow: false,
				//超出某个字符是后面加...
				getEllipsis: api.getEllipsis,
				//统一静态图片路径
				STATIC: api.STATIC,
				//文本滚动内容
				contentTopSwiper: '',
				//主题内容
				themeContent: 0, //0 为上部内容为主，1 为下部内容为主
				themeContentFixBackShow:false,//暂存fixBackShow数据
				//控制样式的数据
				styleData: {
					windowHeight: 0,
					//主题颜色
					themeColor: "#fc6700",
				},
				getHttpData: {
					//轮播公告
					contentTopSwiper: [{
							text: '你好，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute: ''
						},
						{
							text: '你好2，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
							attribute: ''
						},
						// {
						// 	text: '你好3，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好45，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好11，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
						// {
						// 	text: '你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧你好344，我就想看看是啥效果，感觉怎么样啊，大概能撑的下150个字吧',
						// 	attribute: ''
						// },
					],
					//信息与导航
					navigation: [{
							title: "收",
							goods: 5,
							select: true
						},
						{
							title: "推荐",
							goods: 5,
							select: false
						},
						{
							title: "景和山",
							goods: 5,
							select: false
						},
						{
							title: "田园山庄",
							goods: 5,
							select: false
						},
						{
							title: "推荐推荐推",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "田园山庄景和山",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和山庄",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和山庄景",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "收景和山庄景和山庄景和",
							goods: 5,
							select: true
						},
						{
							title: "推荐景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "景和山景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "田园山庄景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "推荐推荐推景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "田园山庄景和山景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和山庄景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和山庄景景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
						{
							title: "景和山庄景和山庄景和景和山庄景和山庄景和",
							goods: 5,
							select: false
						},
					],
					//商品信息
					goodsData: [{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈好的哈哈哈哈哈好的哈哈哈哈哈好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
						{
							imgUrl: '../../../static/img.jpg',
							title: '好的哈哈哈哈哈',
							price: 100,
							id: '1111',
							select:false //是否被选中
						},
					],
					//购物车收藏商品信息
					cartData:[
					]
					
				}
			}
		},
		onLoad() {
			var that = this;
			//获取屏幕的高度
			uni.getSystemInfo({
				success: function(res) {
					that.styleData.windowHeight = (res.windowHeight * 750) / res.windowWidth + 'rpx';
				}
			});
		},
		methods: {
			//更换主题 为主题1
			themeContentFun1() {
				this.themeContent = 1;
				this.themeContentFixBackShow = this.fixBackShow;
				this.fixBackShow = false;
			},
			//更换主题 为主题0
			themeContentFun0() {
				this.themeContent = 0;
				this.fixBackShow = this.themeContentFixBackShow;
			},
			//选择导航
			choiceNav(k,item) {
				for (let i = 0; i < this.getHttpData.navigation.length; i++) {
					this.getHttpData.navigation[i].select = false;
				}
				this.getHttpData.navigation[k].select = true;
				console.log("导航的数据" + item);
			},
			//商品列表上划
			upper(e) {
				this.goodsScrollView.old.scrollTop = e.detail.scrollTop
				if (e.detail.scrollTop > 700) {
					this.fixBackShow = true;
				} else {
					this.fixBackShow = false;
				}
			},
			//添加购物车
			putCart(k){
				let havaThisGoods = false;
				if(this.getHttpData.goodsData[k].select){
					//cartData中删删除数据
					this.getHttpData.cartData = api.arrRemoves(this.getHttpData.cartData,this.getHttpData.goodsData[k]);
					this.getHttpData.goodsData[k].select = false; //更改为未被选中的效果
				}else{
					this.getHttpData.goodsData[k].select = true;
					this.getHttpData.cartData.push(this.getHttpData.goodsData[k]);
					for (var i = 0; i < this.fixBuyGoods.length; i++) {
						if(this.fixBuyGoods[i] == this.getHttpData.goodsData[k]){
							havaThisGoods = true;
						}
					}
					if(!havaThisGoods){
						this.fixBuyGoods.push(this.getHttpData.goodsData[k]);
					}
				}
			},
			//商品列表 返回顶部
			goTop(e) {
				// this.goodsScrollView.scrollTop = e.detail.scrollTop; //这个必须加
				this.goodsScrollView.scrollTop = this.goodsScrollView.old.scrollTop; //这个必须加
				this.$nextTick(function() {
					this.goodsScrollView.scrollTop = 0;
				});
			}
		}
	}
</script>
