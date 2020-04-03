var setReqData = {}; //每个请求里可以单独设置setReqData内容，同setPublicReq 参数一样
// 为了方便管理，我们可以把所有的请求路径都放在这里
// 请求公共常量      官方地址： https://uniapp.dcloud.io/api/request/request?id=request
const setPublicReq = {
	url_pro: "http://47.104.29.54:8080/", //请求前缀
	data: undefined, // 公共data, 每次发起请求时，该参数都会加入其中，重复设置以设置为准
	header: undefined, // 设置请求的 header  默认为系统默认
	method: "GET", // 请求方法，具体请参考官网
	timeout: 30000, // 超时时间，单位 ms
	dataType: "json", // 如果设为 json，会尝试对返回的数据做一次 JSON.parse
	responseType: "text" //设置响应的数据类型。合法值：text、arraybuffer
}
const WebSocket_URL_PRO = ""; //如不设置，则直接采用 setPublicReq.url_pro
const uploadFile_URL_PRO = ""; //如不设置，则直接采用 setPublicReq.
const downloadFile_URL_PRO = ""; //如不设置，则直接采用 setPublicReq.url_pro
/**
 * @param {Object} opt
 * 以下内容为接口
 */
export default { //没定义一个接口都需要在这个位置注册一下，页面才能直接访问到
	getToken,
	updata
};
//例子
const getToken = function(data) {
	let url = "nhihao/898899";
	request(url, data);
};
//上传数据例子
const updata = function(opt) {
	let url = "nhihao/898899";
	uploadFile(url, opt, false); //false 是否调用公共路径
};
//下载数据的例子
const downdata = function(opt) {
	let url = "nhihao/898899";
	downloadFile(url, opt, true);
};
/**
 * 以上内容为接口
 */








//调用配置方法
import reqConfig from "./reqConfig.js";
//普通请求
const request = function(url, data) {
	let opt = {};
	opt = data;
	opt.url = url;
	reqConfig.request(opt, setPublicReq);
}
//数据上传
const uploadFile = function(url, getOpt, sta) { //sta 是否调用公共路径
	let opt = getOpt;
	if (sta) {
		opt.url = WebSocket_URL_PRO ? (WebSocket_URL_PRO + url) : (setPublicReq.url_pro + url);
	} else {
		opt.url = url;
	}
	reqConfig.uploadFile(opt);
}
//数据下载
const downloadFile = function(url, getOpt, sta) {//sta 是否调用公共路径
	let opt = getOpt;
	if (sta) {
		opt.url = downloadFile_URL_PRO ? (downloadFile_URL_PRO + url) : (setPublicReq.url_pro + url);
	} else {
		opt.url = url;
	}
	reqConfig.downloadFile(opt);
}
