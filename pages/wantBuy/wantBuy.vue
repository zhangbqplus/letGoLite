<template>
	<view class="page_index">
		<view class="content">
			<cardTwo :dataList='getDate'></cardTwo>
			<cardTwo :dataList='dataList'></cardTwo>
		</view>
	</view>
</template>

<script>
	import api from "../../public/httpd.js";
	import cardTwo from "../../components/card_2.vue";
	export default {
		data() {
			return {
				getDate:{
					color: {
						red: 126,
						green: 121,
						blue: 10,
						alpha: 1
					}, //背景颜色
					wordsColor: '590101',
					tag: '求购', //标签
					content: '上的回房间哈防护等级粉红色的就和驾驶飞机的和大家哈佛', //内容
					prices: '2000', //价格
					number: '100', //查看人数
					comment: [ //评论
						{
							src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853', //头像
							content: '发挥巨大的数据返回东京哈吉会觉得很舒服活动教案火箭发射' //评论内容
						},
						{
							src: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290', //头像
							content: '发挥巨大的数' //评论内容
						},
				
					],
					code: 1120, //识别码
				},
				dataList: [
					{
					color: {
						red: 255,
						green: 0,
						blue: 0,
						alpha: 1
					}, //背景颜色
					wordsColor: '590101',
					tag: '求购', //标签
					content: '上的回房间哈防护等级粉红色的就和驾驶飞机的和大家哈佛', //内容
					prices: '2000', //价格
					number: '100', //查看人数
					comment: [ //评论
						{
							src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853', //头像
							content: '发挥巨大的数据返回东京哈吉会觉得很舒服活动教案火箭发射' //评论内容
						},
						{
							src: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290', //头像
							content: '发挥巨大的数' //评论内容
						},

					],
					code: 1120, //识别码
				},
				{
					color: {
						red: 255,
						green: 0,
						blue: 0,
						alpha: 0.5
					}, //背景颜色
					wordsColor: '590101',
					tag: '求购', //标签
					content: '上的回房间哈防护等级粉红色的就和驾驶飞机的和大家哈佛', //内容
					prices: '2000', //价格
					number: '100', //查看人数
					comment: [ //评论
						{
							src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853', //头像
							content: '发挥巨大的数据返回东京哈吉会觉得很舒服活动教案火箭发射' //评论内容
						},
						{
							src: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290', //头像
							content: '发挥巨大的数' //评论内容
						},
				
					],
					code: 1120, //识别码
				},
				{
					color: {
						red: 58,
						green: 211,
						blue: 17,
						alpha: 0.5
					}, //背景颜色
					wordsColor: '590101',
					tag: '求购', //标签
					content: '上的回房间哈防护等级粉红色的就和驾驶飞机的和大家哈佛', //内容
					prices: '2000', //价格
					number: '100', //查看人数
					comment: [ //评论
						{
							src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853', //头像
							content: '发挥巨大的数据返回东京哈吉会觉得很舒服活动教案火箭发射' //评论内容
						},
						{
							src: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290', //头像
							content: '发挥巨大的数' //评论内容
						},
				
					],
					code: 1120, //识别码
				},
				{
					color: {
						red: 255,
						green: 0,
						blue: 0,
						alpha: 0.5
					}, //背景颜色
					wordsColor: '590101',
					tag: '求购', //标签
					content: '上的回房间哈防护等级粉红色的就和驾驶飞机的和大家哈佛', //内容
					prices: '2000', //价格
					number: '100', //查看人数
					comment: [ //评论
						{
							src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853', //头像
							content: '发挥巨大的数据返回东京哈吉会觉得很舒服活动教案火箭发射' //评论内容
						},
						{
							src: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290', //头像
							content: '发挥巨大的数' //评论内容
						},
				
					],
					code: 1120, //识别码
				},
				{
					color: {
						red: 237,
						green: 194,
						blue: 22,
						alpha: 1
					}, //背景颜色
					wordsColor: '590101',
					tag: '求购', //标签
					content: '上的回房间哈防护等级粉红色的就和驾驶飞机的和大家哈佛', //内容
					prices: '2000', //价格
					number: '100', //查看人数
					comment: [ //评论
						{
							src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853', //头像
							content: '发挥巨大的数据返回东京哈吉会觉得很舒服活动教案火箭发射' //评论内容
						},
						{
							src: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290', //头像
							content: '发挥巨大的数' //评论内容
						},
				
					],
					code: 1120, //识别码
				},
				]
			}
		},
		components: {
			cardTwo,
		},
		methods: {

		}
	}
</script>

<style>
	page{
		background-color: #ececec;
	}
	.content {
		width: 94%;
		margin: 0 auto;
	}
</style>
