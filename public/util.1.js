import httpd from './httpd.js'
import constant from './constant.js'
//获取用户token
async function getToken() {
	let usertoken = "";
	return {
		usertoken: usertoken
	}
};
//数据缩写
function formatFloat(num,unit,iNt){
	let NUM = '';
	let UNIT = '';
	let NuM = 1;
	if(num < 0){
		NuM = 0;
		num = -num;
	}
	let nuM = num * 100;
	if(isNull(num)){
		return 0;
	}
	if(unit == '拾'){
		if(num >= 10){
			NUM = parseInt(nuM / 10) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if(unit == '佰'){
		if(num >= 100){
			NUM = parseInt(nuM / 100) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if(unit == '仟'){
		if(num >= 1000){
			NUM = parseInt(nuM / 1000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if(unit == '万'){
		if(num >= 10000){
			NUM = parseInt(nuM / 10000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if(unit == '亿'){
		if(num >= 100000000){
			NUM = parseInt(nuM / 100000000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if(((unit >= 0) && (unit < 10)) || isNull(unit)){
		UNIT = '';
		NUM = parseInt(nuM) / 100;
	}else if((unit >= 10) && (unit < 100)){
		if(num >= 10){
			UNIT = '拾';
			NUM = parseInt(nuM / 10) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if((unit >= 100) && (unit < 1000)){
		if(num >= 100){
			UNIT = '佰';
			NUM = parseInt(nuM / 100) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if((unit >= 1000) && (unit < 10000)){
		if(num >= 1000){
			UNIT = '仟';
			NUM = parseInt(nuM / 1000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if((unit >= 10000) && (unit < 100000)){
		if(num >= 10000){
			UNIT = '万';
			NUM = parseInt(nuM / 10000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if((unit >= 100000) && (unit < 100000000)){
		if(num >= 100000){
			UNIT = '万';
			NUM = parseInt(nuM / 10000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}else if(unit >= 100000000){
		if(num >= 100000000){
			UNIT = '亿';
			NUM = parseInt(nuM / 100000000) / 100;
		}else{
			NUM = parseInt(nuM) / 100;
		}
	}
	if(NuM == 0){
		NUM = -NUM;
	}
	if(iNt == false){//是否去掉后两位小数
		return parseInt(NUM) + UNIT + (isNull(UNIT) ? '' : '+');
	}
	return NUM + UNIT + (isNull(UNIT) ? '' : '+');
};
//手机屏幕的宽高比
function wH(){
	let w = 0;
	let h = 0;
	uni.getSystemInfo({
		success: function (res) {
			w = res.windowWidth;
			h = res.screenHeight;
		}
	});
	return w/h;
}
//字符串截取公共事件,field 字符串，select 要分割的字符 未填时直接输出，state 分割后要获取的字段的下标 默认为all  all代表全部 all输出为数组
function cutOut(field,select,state){
	if(isNull(field)){
		console.log("请输入要截取字段");
		return;
	}
	if(isNull(select) || field.indexOf(select) == -1){
		return field;
	}
	if(isNull(state) || (state == 'all')){
		if(state == 0){
			return field.split(select)[state];
		}
		return field.split(select);
	}else if(!isNull(state)){
		return field.split(select)[state];
	}
}
//事件转换器  将秒输出为时、分、秒
function time(res){
	//计时器秒变时、分、秒
	let time = parseInt(res);
	let hout1 = 0,
		minute1 = 0,
		second1 = 0,
		hout = 0,
		minute = 0,
		second = 0;
	if(time > 356400){
		hout = '99';
		minute = '99';
		second = '99';
	}else{
		hout1 =parseInt(time / 3600);
		minute1 = parseInt((time % 3600 ) / 60);
		second1 = parseInt((time % 60));
		if(hout1 <= 9){
			hout = '0' + hout1;
		}else{
			hout =  hout1;
		}
		if(minute1 <= 9){
			minute = '0' + minute1;
		}else{
			minute =  minute1;
		}
		if(second1 <= 9){
			second = '0' + second1;
		}else{
			second = second1;
		}
	}
	let timeBack = {
		hout : hout,
		minute : minute,
		second : second
	};
	return timeBack;
}
//判断是否为空
function isNull(opt){
	if(opt == undefined || opt == null || opt == '' || opt == [] || opt == {} ){
		return true;
	}else{
		return false;
	}
}
//格式化日期 //附属token获取事件(h5)
function format(date, fmt) {
	var data = new Date(date)
	var o = {
		"M+": data.getMonth() + 1,                 //月份 
		"d+": data.getDate(),                    //日 
		"h+": data.getHours(),                   //小时 
		"m+": data.getMinutes(),                 //分 
		"s+": data.getSeconds(),                 //秒 
		"q+": Math.floor((data.getMonth() + 3) / 3), //季度 
		"S": data.getMilliseconds()             //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}
//生成随机数(23位，不足后面自动补0)
function getMixed() {
	var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
		'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	];
	var a = "";
	for (var i = 0; i < 4; i++) {
		a += chars[Math.ceil(Math.random() * 35)];
	}
	var myDate = new Date();
	var datethis = a +
		myDate.getFullYear() //获取完整的年份(4位,1970-????)4
		+
		myDate.getMonth() //获取当前月份(0-11,0代表1月)2
		+
		myDate.getDate() //获取当前日(1-31)2
		+
		myDate.getDay() //获取当前星期X(0-6,0代表星期天)1
		// +myDate.getTime()      //获取当前时间(从1970.1.1开始的毫秒数)
		+
		myDate.getHours() //获取当前小时数(0-23)2
		+
		myDate.getMinutes() //获取当前分钟数(0-59)2
		+
		myDate.getSeconds() //获取当前秒数(0-59)2
		+
		myDate.getMilliseconds(); //获取当前毫秒数(0-999)4
	if (23 > datethis.length) {
		var b = "";
		for (var j = 0; j < (23 - datethis.length); j++) {
			b = b + "0";
		}
		datethis = datethis + b;
	}
	return datethis;
}
//添加缓存
function setItem(key, value) {
	if (key == "" || key == undefined) {
		console.log("没有key值");
		return false;
	} else {
		if (value == undefined || value == null) {
			console.log("没有value值");
			return false;
		}else{
			// #ifdef H5
			window.localStorage.setItem(key, JSON.stringify(value));
			// #endif
			// #ifdef MP-WEIXIN
			uni.setStorageSync(key, value);
			// #endif
		}
	}
	const valueThis = getItem(key);
	if(!valueThis){
		if(valueThis == ''){
			return true;
		}
		return false;
	}else{
		return true;
	}
}
//查询缓存
function getItem(key) {
	// #ifdef H5
	if (key == "" || key == undefined) {
		console.log("没有key值");
		return false;
	} else {
		if (window.localStorage.getItem(key) == undefined) {
			console.log("没有查询到key值");
			return false;
		} else {
			return JSON.parse(window.localStorage.getItem(key));
		}
	}
	// #endif
	// #ifdef MP-WEIXIN
	if (key == "" || key == undefined ) {
		console.log("没有key值");
		return false;
	} else {
		if (uni.getStorageSync(key) == undefined) {
			console.log("没有查询到key值");
			return false;
		} else{
			return uni.getStorageSync(key);
		}
	}
	// #endif
}
//删除缓存
function delItem(key) {
	if (key == "" || key == undefined) {
		console.log("没有key值");
		return false;
	} else {
		// #ifdef H5
		window.localStorage.removeItem(key);
		window.sessionStorage.removeItem(key);
		// #endif
		// #ifdef MP-WEIXIN
		uni.removeStorageSync(key);
		// #endif
	}
	const value = getItem(key);
	if(!valueThis){
		return true;
	}else{
		return false;
	}
}
//图片WEBP公共方法
function imgwebp(path){
	if(isNull(path)){
		console.log("输入数据为空");
		return;
	}
	let pathThis = path.trim();
	let https = [
		'http://','https://','HTTP://','HTTPS://'
	];
	if(!isContent(pathThis,https)){
		pathThis = constant.server_url + pathThis;
	};
	if(uni.getSystemInfoSync().platform=='ios'){
		if(pathThis.indexOf(".jpg")>-1||pathThis.indexOf(".JPG")>-1||pathThis.indexOf(".jpeg")>-1||pathThis.indexOf(".JPEG")>-1){
			return pathThis+"?iopcmd=convert&dst=jpg&Q=80";
		}else{
			return pathThis;
		}
	}else{
		return pathThis+"?iopcmd=convert&dst=webp&Q=80";
	}
}
//判断是否为json
function isJsonString(str) {
	try {
		if (typeof JSON.parse(str) == "object") {
			return true;
		}
	} catch(e) {
	}
	return false;
}
// 判断是A里面是否包含B,B可以是数组，每个数组代表一个参数，即A里面是否包含B1或则B2
function isContent(A,B) {
	if(B  instanceof Array){
		let arr={
			arr:Array,
			t:0,
			isTrue:false
		};
		for (let i = 0; i < B.length; i++) {
			if(A.indexOf(B[i]) > -1) {
				arr.arr[arr.t]=B[i];
				arr.t++;
				arr.isTrue=true;
			}
		}
		if(arr.isTrue){
			return arr;
		}else{
			return false;
		}
		
	}else{
		if(A.indexOf(B) > -1) {
			return true;
		}
	}
	return false;
}
// 校验手机号
function isPhoneNumber(phone){
	return /^1(3\d|4\d|5\d|6\d|7\d|8\d|9\d)\d{8}$/g.test(phone);
}
//附属获取token事件：获取小程序token
function getAppletToken(){
	let token = "";
	return new Promise(function(resolve, reject) {
		if(uni.getStorageSync('token')){
			token = uni.getStorageSync('token');
			resolve(token);
		}else{
			uni.login({
			  success:(res)=>{
				http.loginIcity({
					"js_code":res.code,
					"type":'1'
				}).then(data=>{
				  uni.setStorageSync("token",data.data.TOKEN);
				  resolve(data.data.TOKEN);
				}).catch(err=>{
					uni.showToast({
							title: '信息加载失败！',
							icon: 'none'
					});
					resolve("");
				});
			  }
			})
		}
	})
}
//页面跳转编码
function encoded(obj){
	let encodedData = JSON.stringify(obj).replace(/%/g, '250_replace_');
	return encodeURIComponent(encodedData);
}
//页面跳转解码
function dencoded(str){
	if(isNull(str)){
		return undefined;
	}
	let dencodedData = decodeURIComponent(decodeURIComponent(str));
	let dencodedDataThis = dencodedData.replace(/250_replace_/g,"%");
	if(typeof dencodedDataThis == "object"){
		return dencodedDataThis;
	}else{
		return JSON.parse(dencodedDataThis);
	}
}
//获取游览器信息
function browser() {
	var ua = window.navigator.userAgent.toLowerCase(); 
	if (ua.match(/MicroMessenger/i) == 'micromessenger') 
	{ 
		return true; 
	} else { 
		return false; 
	} 
}
module.exports = {
	getToken: getToken,//获取token
	getMixed: getMixed,//生成23位随机数，不足后面自动补0
	isNull: isNull,//判断内容是否为空
	setItem: setItem,//设置缓存
	getItem: getItem,//读取缓存
	delItem: delItem,//删除缓存
	imgwebp: imgwebp,//图片压缩
	isPhoneNumber: isPhoneNumber,//手机号校验
	isJsonString: isJsonString,//是否为json对象
	isContent: isContent,//A中是否包含B
	encoded: encoded,//encodeURIComponent 编码
	dencoded: dencoded,//encodeURIComponent 解码
	browser: browser,//获取游览器信息（暂时仅支持返回是否为微信）
	time: time,//时间转换器，将秒转换为分、时、秒
	wH: wH,//屏幕宽高比
	formatFloat: formatFloat,//数字缩写，保留小数点后两位
	cutOut:cutOut,//选中输入输出的内容
}
