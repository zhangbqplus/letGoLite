<template>
	<view>
		<view class="titleBar">
			
		</view>
		<view class="title">
			<view class="back">
				
			</view>
			<view class="titleContent">
				{{name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
		    name:String,
		},
		data() {
			return {
				
			};
		},
		methods:{ 
		          
		}
	}
</script>
	
<style>
.titleBar{
	height:var(--status-bar-height);
}
.title{
	height: 140rpx;
	background-color: #333333;
}
</style>
