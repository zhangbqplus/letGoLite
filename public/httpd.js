import request from './request.js';

async function  baseRequest(data,method){
	let encodedData = JSON.stringify(data).replace(/%/g, '250_replace_');
	const text =await request.request(method,encodedData);//处理异步
	return text.data;
}

module.exports = {
	//登录
	logon(data) {
		return baseRequest(data,'logon');
	},
}