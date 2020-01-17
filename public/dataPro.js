import httpd from './httpd.js'
import constant from './constant.js'
//获取系统信息
async function getSystemInfo(){
	uni.getSystemInfo({
	    success: function (res) {
			setStorage('getSystemInfo',res);
	    },
		fail: function(res){
			
		}
	});
}
function setStorage(key,value){
	uni.setStorage({
	    key: key,
	    data: value,
	    success: function () {
	        console.log('success');
	    }
	});
}


module.exports = {
	getSystemInfo : getSystemInfo //获取系统信息
}
