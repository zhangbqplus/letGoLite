<template>
	<view class="page_index">
		<view class="content">
			<cardOne :dataList = 'getData' ></cardOne>
			<cardOne :dataList = 'dataList' ></cardOne>
		</view>
	</view>
</template>

<script>
	import api from "../../public/httpd.js";
	import headBar from "../../components/headBar.vue";
	import cardOne from "../../components/card_1.vue";
	export default {
		components: {
			cardOne,
			headBar
		},
		data() {
			return {
				getData: {
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578936199850&di=fa11378b0441e4ea2099cb2ab4c87821&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
					describe: '价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购', //最大不超过12个字
					prices: '1000',
					code:100
				},
				dataList:[
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578936199850&di=fa11378b0441e4ea2099cb2ab4c87821&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
						describe: '价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购', //最大不超过12个字
						prices: '10004',
						code:1003
					},
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578936199850&di=fa11378b0441e4ea2099cb2ab4c87821&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
						describe: '价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购', //最大不超过12个字
						prices: '1020',
						code:100
					},
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578936199850&di=fa11378b0441e4ea2099cb2ab4c87821&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
						describe: '价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购,价格优惠，限时抢购', //最大不超过12个字
						prices: '1000',
						code:100
					}
				]
			}
		},
		onLoad() {
			api.logon({
				token: 1,
				fhahf: 111
			}).then(res => {
				console.log(res);
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
	.content {
		width: 94%;
		margin: 0 auto;
	}
</style>
