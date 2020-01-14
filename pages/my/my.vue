<template>
	<view>
		<cardTwo></cardTwo>
	</view>
</template>

<script>
	import api from "../../public/httpd.js";
	import cardTwo from "../../components/card_1.vue";
	export default {
		data() {
			return {
				dataList:[
					{
						color:{
							red:'',
							green:'',
							blue:'',
							alpha:''
						},//背景颜色
						tag:'',//标签
						content:'',//内容
						prices:'',//价格
						number:'',//查看人数
						comment:[//评论
							{
								src:'',//头像
								content:''//评论内容
							}
						],
						code:'',//识别码
					}
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

</style>
