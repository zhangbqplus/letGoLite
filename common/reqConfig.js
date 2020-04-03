//请求逻辑
const request = function(reqInfor, setPublicReq) {
		let reqData = {};
		if (reqInfor) {
			if (reqInfor.url) {
				reqData.url = setPublicReq.url_pro + reqInfor.url;
			}
			if (reqInfor.data) {
				reqData.data = reqInfor.data;
			}
			if (reqInfor.header) {
				reqData.header = reqInfor.header;
			}
			if (reqInfor.method) {
				reqData.method = reqInfor.method;
			}
			if (reqInfor.timeout) {
				reqData.timeout = reqInfor.timeout;
			}
			if (reqInfor.dataType) {
				reqData.dataType = reqInfor.dataType;
			}
			if (reqInfor.responseType) {
				reqData.responseType = reqInfor.responseType;
			}
			if (reqInfor.success) {
				reqData.success = reqInfor.success;
			}
			if (reqInfor.fail) {
				reqData.fail = reqInfor.fail;
			}
			if (reqInfor.complete) {
				reqData.complete = reqInfor.complete;
			}
			for (let item in setPublicReq.data) {
				if (!reqInfor.data[item]) {
					if (reqInfor.dataNoPro != ture) { // dataNoPro 为true时即是不适用预设数据
						reqData.data[item] = setPublicReq.data[item];
					}
				}
			}
			reqData.data = reqInfor.data;
			if (setPublicReq.header) {
				if (!reqInfor.header) {
					reqData.header = setPublicReq.header;
				}
			}
			if (setPublicReq.method) {
				if (!reqInfor.method) {
					reqData.method = setPublicReq.method;
				}
			}
			if (setPublicReq.timeout) {
				if (!reqInfor.timeout) {
					reqData.timeout = setPublicReq.timeout;
				}
			}
			if (setPublicReq.dataType) {
				if (!reqInfor.dataType) {
					reqData.dataType = setPublicReq.dataType;
				}
			}
			if (reqInfor.sslVerify == false) {
				reqData.sslVerify = false;
			}
		} else {
			reqData.url = setPublicReq.url_pro;
			for (let item in setPublicReq.data) {
				reqData.data[item] = setPublicReq.data[item];
			}
			if (setPublicReq.header) {
				reqData.header = setPublicReq.header;
			}
			if (setPublicReq.method) {
				reqData.method = setPublicReq.method;
			}
			if (setPublicReq.timeout) {
				reqData.timeout = setPublicReq.timeout;
			}
			if (setPublicReq.dataType) {
				reqData.dataType = setPublicReq.dataType;
			}
		}
		uni.request(reqData);
	};
//上传数据
const uploadFile = function(opt){
	uni.uploadFile(opt);
}
//下载数据
const downloadFile = function(opt){
	uni.uploadFile(opt);
}

export default {
	request,
	downloadFile,
	uploadFile
}
