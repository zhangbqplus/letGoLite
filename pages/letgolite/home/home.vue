<template>
	<view>
		<view class="home_top">
			<view @click="titleClick()" :class="{'title0' : !styleData.titleChange, 
						   'title1' : styleData.titleChange }">
				首页
			</view>
			<view class="search">
				<view class="searchBox">
					<view class="searchImgBox" @click="searchFunction()">
						<image class="searchImg" :src="STATIC('home/search.png')" mode='aspectFill'></image>
					</view>
					<input class="searchBoxInput" confirm-type = "search" v-model="searchData" placeholder="请输入搜索内容" />
				</view>
				<view class="searchIcon" @click="getLabelNav()" :style="'background-color: '+ styleData.themeColor +';'">
					<image class="searchIconImg" :src="this.STATIC(styleData.communityChoiceRightLeft ? 'home/retract.png' : 'home/open.png')"
					 mode='aspectFill'></image>
				</view>
				<view class="searchGo" @click="searchFunction()" >

				</view>
			</view>
			<view class="communityChoiceBox">
				<view class="communityChoiceBox_box">

				</view>
				<view :class="{'communityChoiceRight0' : !styleData.communityChoiceRightLeft, 
								'communityChoiceRight1' : styleData.communityChoiceRightLeft }"
				 :style="'background-color: '+ styleData.themeColor +';'">
				</view>
				<view :class="{'communityChoiceLeft0' : !styleData.communityChoiceRightLeft, 
								'communityChoiceLeft1' : styleData.communityChoiceRightLeft }"
				 :style="'background-color: '+ styleData.themeColor +';'">
				</view>
				<view :class="{'communityChoice0' : !styleData.communityChoice, 
								'communityChoice1' : styleData.communityChoice }">
					<view class="communityChoiceNavContent">
						<scroll-view class="communityChoiceNavContentPro" scroll-x="true">
							<view class="itemLabHaveClose" v-for="(item, index) in getHttpData.caches" :key="index">
								{{item.title}}
								<image v-if="item.isDelete" class="itemLabHaveCloseDelete" :src="STATIC('home/delete.png')" mode='aspectFill'></image>
								<view v-if="!item.isDelete" class="itemLabHaveCloseDeleteBox">
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view class="communityChoiceSearch">
					<view class="itemLabBox">
						<scroll-view class="itemLabBoxPro" scroll-x="true">
							<view class="itemLab" @click="choiceNav(index,item)" v-for="(item, index) in getHttpData.villageList" :key="index" :style="item.select ? ('background-color: '+ styleData.themeColor +';color: #FFF;' ):'background-color: #ecf0f3;color: #333333;'">
								{{item.title}}
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
		<view class="contentHome">
			<!-- 占位 contentHome -->
			<view 		:class="{'contentHome0' : !styleData.titleChange, 
						   'contentHome1' : styleData.titleChange }">
				
			</view>
			<view class="contentBock" v-for="(item, index) in getHttpData.contentData" :key="index" >
				<view :class="'contentBock_card' + item_child.card"
					v-if="(i%4) == item_child.card"
					v-for="(item_child, i) in item" :key="i"
					:style="'background-color:' + item_child.titleChange + ';'"
					>
					<image class="contentBock_card_img" :src="item_child.img_url" mode='aspectFill'></image>
					<view class="contentBock_card_bottom">
						<view class="contentBock_card_title">
							{{item_child.illustrate}}
						</view>
						<view class="contentBock_card_price">
							￥{{item_child.price}}
						</view>
					</view>
				</view>
				<view class="clear"></view>
			</view>
				
		</view>
	</view>
</template>
<style>
	/* 内容 */
	.contentHome{
		width: 90%;
		margin: 0 auto;
	}
	.contentHome0 {
		width: 100%;
		height: 330rpx;
		transition: height 0.6s;
		-moz-transition: height 0.6s;
		/* Firefox 4 */
		-webkit-transition: height 0.6s;
		/* Safari 和 Chrome */
		-o-transition: height 0.6s;
		/* Opera */
	}
	.contentHome1 {
		width: 100%;
		height: 280rpx;
		transition: height 0.6s;
		-moz-transition: height 0.6s;
		/* Firefox 4 */
		-webkit-transition: height 0.6s;
		/* Safari 和 Chrome */
		-o-transition: height 0.6s;
		/* Opera */
	}
	.contentBock{
		margin-top: 20rpx;
	}
	.contentBock_card0{
		margin-top: 20rpx;
		float: left;
		width: 300rpx;
		height: 420rpx;
		position: relative;
		border-radius: 30rpx;
	}
	.contentBock_card1{
		margin-top: 20rpx;
		float: right;
		width: 360rpx;
		height: 520rpx;
		position: relative;
		border-radius: 30rpx;
	}
	.contentBock_card2{
		margin-top: 20rpx;
		float: left;
		width: 300rpx;
		height: 420rpx;
		position: relative;
		border-radius: 30rpx;
	}
	.contentBock_card3{
		margin-top: 20rpx;
		float: right;
		width: 360rpx;
		height: 320rpx;
		position: relative;
		border-radius: 30rpx;
	}
	.contentBock_card_bottom{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 80rpx;
		background-color: rgb(0,0,0,0.4);
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		display: flex;
	}
	.contentBock_card_img{
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
		/* width: 80%;
		height: 80%;
		margin-left: 10%;
		margin-top: 10%; */
	}
	.contentBock_card_title{
		width:calc(100% - 120rpx);
		margin-right: 20rpx;
		margin-left: 10rpx;
		font-size: 30rpx;
		line-height: 80rpx;
		color: #FFFFFF;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}
	.contentBock_card_price{
		width: 120rpx;
		display: inline-block;
		font-size: 30rpx;
		line-height: 80rpx;
		color: #FFFFFF;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}
	/* 页面名称 */
	.itemLabBox {
		width: 90%;
		height: 80rpx;
		margin: 0 auto;
	}

	.itemLabBoxPro {
		padding-top: 10rpx;
		height: 70rpx;
		white-space: nowrap;
		display: flex;
	}

	.itemLab {
		padding: 10rpx 22rpx;
		border-radius: 16rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		display: inline-block;
		margin-right: 20rpx;
	}

	page {
		background-color: #eff3f6;
	}

	.clear {
		clear: both;
		display: block;
	}

	/* 导航与搜索 */
	.home_top {
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		background-color: #FFFFFF;
		/* border-bottom: 1px solid #333333; */
		/* -moz-box-shadow: 0px 5px 5px #888888; */ /* 老的 Firefox */
		/* box-shadow: 0px 5px 5px #888888; */
	}

	.title0 {
		width: 90%;
		margin: 60rpx auto 0;
		font-size: 60rpx;
		height: 120rpx;
		color: #333333;
		transition: height 0.6s, font-size 0.6s;
		-moz-transition: height 0.6s, font-size 0.6s;
		/* Firefox 4 */
		-webkit-transition: height 0.6s, font-size 0.6s;
		/* Safari 和 Chrome */
		-o-transition: height 0.6s, font-size 0.6s;
		/* Opera */
	}

	.title1 {
		width: 90%;
		margin: 60rpx auto 0;
		font-size: 36rpx;
		height: 70rpx;
		color: #333333;
		transition: height 0.6s, font-size 0.6s;
		-moz-transition: height 0.6s, font-size 0.6s;
		/* Firefox 4 */
		-webkit-transition: height 0.6s, font-size 0.6s;
		/* Safari 和 Chrome */
		-o-transition: height 0.6s, font-size 0.6s;
		/* Opera */
	}

	.search {
		width: 90%;
		margin: 0 auto;
		height: 70rpx;
	}

	.searchBox {
		border-radius: 16rpx;
		width: 66%;
		height: 70rpx;
		line-height: 70rpx;
		background-color: #ecf0f3;
		float: left;
	}

	.searchImgBox {
		width: 20%;
		float: left;
		height: 70rpx;
		text-align: center;
	}

	.searchImg {
		width: 50rpx;
		height: 50rpx;
		margin: 10rpx auto;
	}

	.searchBoxInput {
		width: 76%;
		height: 70rpx;
		line-height: 70rpx;
	}

	.searchIcon {
		border-radius: 16rpx;
		margin-left: 20rpx;
		width: 70rpx;
		height: 70rpx;
		float: left;
	}

	.searchIconImg {
		width: 50rpx;
		height: 50rpx;
		padding: 10rpx;
	}

	.searchGo {
		opacity: 0;
		width: 15%;
		height: 70rpx;
		float: right;
	}

	.communityChoiceBox {
		position: relative;
		width: 100%;
	}

	.communityChoiceBox_box {
		width: 100%;
		height: 20rpx;
		background-color: #FFFFFF;
	}

	.communityChoiceRight0 {
		position: absolute;
		z-index: 100;
		left: 538rpx;
		top: 20rpx;
		width: 0;
		height: 80rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.communityChoiceRight1 {
		position: absolute;
		z-index: 100;
		left: 538rpx;
		top: 20rpx;
		width: 100%;
		height: 80rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.communityChoiceLeft0 {
		position: absolute;
		z-index: 100;
		right: 212rpx;
		width: 0;
		top: 20rpx;
		height: 80rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.communityChoiceLeft1 {
		position: absolute;
		z-index: 100;
		right: 212rpx;
		width: 100%;
		top: 20rpx;
		height: 80rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.communityChoice0 {
		position: absolute;
		z-index: 101;
		top: 20rpx;
		right: 0;
		width: 0;
		height: 80rpx;
	}

	.communityChoice1 {
		position: absolute;
		z-index: 101;
		top: 20rpx;
		right: 0;
		width: 100%;
		height: 80rpx;
		transition: width 0.6s;
		-moz-transition: width 0.6s;
		/* Firefox 4 */
		-webkit-transition: width 0.6s;
		/* Safari 和 Chrome */
		-o-transition: width 0.6s;
		/* Opera */
	}

	.communityChoiceNavContent {
		width: 100%;
		height: 70rpx;
	}

	.communityChoiceNavContentPro {
		white-space: nowrap;
		width: 90%;
		margin: 0 auto;
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		padding-top: 4rpx;
	}

	.itemLabHaveClose {
		white-space: nowrap;
		display: inline-block;
		border-radius: 15rpx;
		background-color: rgba(255, 255, 255, 0.1);
		color: #FFFFFF;
		margin-right: 20rpx;
		font-size: 24rpx;
		height: 50rpx;
		padding: 0 0 0 20rpx;
		line-height: 50rpx;
	}

	.itemLabHaveCloseDelete {
		width: 50rpx;
		height: 50rpx;
		float: right;
		opacity: 0.4;
		display: inline-block;
	}
	.itemLabHaveCloseDeleteBox{
		width: 20rpx;
		height: 50rpx;
		float: right;
		opacity: 0;
		display: inline-block;
	}

	.communityChoiceSearch {
		position: absolute;
		left: 0;
		top: 20rpx;
		width: 100%;
		height: 80rpx;
		background-color: #FFFFFF;
	}
</style>
<script>
	import api from "common/api.js";
	import req from "common/req.js";
	export default {
		components: { //组件声明

		},
		data() {
			return {
				//统一静态图片路径
				STATIC: api.STATIC,
				// 样式数据
				styleData: {
					//导航动画控制数据
					communityChoiceTime: 0,
					communityChoiceRightLeft: false,
					communityChoice: false,
					//标题变小
					titleChange: false,
					//主题颜色
					themeColor: "#caf29c",
					windowWidth:0,
				},
				//数据的双向绑定
				searchData:'',
				getHttpData: {
					villageList: [{
							title: "田园山庄",
							select: true
						},
						{
							title: "景和山庄",
							select: false
						},
						{
							title: "景和九英里",
							select: false
						},
						{
							title: "龙湖小区",
							select: false
						},
						{
							title: "融创文旅城",
							select: false
						},
						{
							title: "龙园",
							select: false
						},
						{
							title: "推荐",
							select: false
						},
						{
							title: "热门",
							select: false
						}
					],
					caches: [
						{
							title: "田园山庄",
							isDelete: false
						},
						{
							title: "景和山庄",
							isDelete: true
						},
						{
							title: "景和九英里",
							isDelete: true
						},
						{
							title: "龙湖小区",
							isDelete: true
						},
						{
							title: "融创文旅城",
							isDelete: true
						},
						{
							title: "龙园",
							isDelete: true
						},
						{
							title: "推荐",
							isDelete: true
						},
						{
							title: "热门",
							isDelete: true
						}
					],
					contentData:[
						[
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#caf29c",
								card:'0'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffc4c6",
								card:'1'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffe35c",
								card:'2'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#f7a7c2",
								card:'3'
							}
						],
						[
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#caf29c",
								card:'0'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#f7a7c2",
								card:'1'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffc4c6",
								card:'2'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffe35c",
								card:'3'
							}
						],
						[
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffe35c",
								card:'0'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#caf29c",
								card:'1'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffc4c6",
								card:'2'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#f7a7c2",
								card:'3'
							}
						],
						[
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#caf29c",
								card:'0'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffe35c",
								card:'1'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#ffc4c6",
								card:'2'
							},
							{
								img_url:"../../../static/img.jpg",
								illustrate:"这是啥这是啥这是啥这是啥这是啥这是啥",
								price:"1000",
								titleChange:"#f7a7c2",
								card:'3'
							}
						]
					]
				},
			}
		},
		onLoad() {
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
			        // console.log(res.windowWidth);
					that.styleData.windowWidth = res.windowWidth;
			    }
			});
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			// //更改主题颜色
			// this.styleData.themeColor = this.getHttpData.contentData[parseInt((e.scrollTop * 750)/this.styleData.windowWidth/860)][1].titleChange;
			// this.$forceUpdate();
		},
		methods: {
			//标签 弹出历史搜索
			getLabelNav() {
				if (this.styleData.communityChoiceTime != 0) {
					return;
				}
				this.styleData.communityChoiceTime = 1;
				if (this.styleData.communityChoiceRightLeft) {
					this.styleData.communityChoice = false;
					this.styleData.communityChoiceRightLeft = false;
					var setTimeout1 = setTimeout(() => {
						this.styleData.communityChoiceTime = 0;
						clearTimeout(setTimeout1);
					}, 700);
				} else {
					this.styleData.communityChoiceRightLeft = true;
					var setTimeout0 = setTimeout(() => {
						this.styleData.communityChoice = true;
						var setTimeout1 = setTimeout(() => {
							this.styleData.communityChoiceTime = 0;
							clearTimeout(setTimeout0);
							clearTimeout(setTimeout1);
						}, 700);
					}, 700);
				}
			},
			//页面标题放大缩小
			titleClick() {
				if (this.styleData.titleChange) {
					this.styleData.titleChange = false;
				} else {
					this.styleData.titleChange = true;
				}
			},
			//搜索
			searchFunction(){
				console.log("双向绑定的数据：" + this.searchData);
			},
			//导航栏选择
			choiceNav(k,item){
				for (let i = 0; i < this.getHttpData.villageList.length; i++) {
					this.getHttpData.villageList[i].select = false;
				}
				this.getHttpData.villageList[k].select = true;
				console.log("导航的数据" + item);
			}
			
		}
	}
</script>
