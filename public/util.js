import httpd from './httpd.js'
import constant from './constant.js'
//获取系统信息
async function getSystemInfo(){
	let info = await getSystemInfoPro();
	console.log(info);
	return info;
}
async function getSystemInfoPro(){
	return new Promise(resolve => {
        uni.getSystemInfo({
            success: function (res) {
        		resolve(res);
            },
        	fail: function(res){
        		resolve(res);
        	}
        });
    });
}


module.exports = {
	getSystemInfo : getSystemInfo //获取系统信息
}
