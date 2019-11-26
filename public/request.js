import constant from './constant.js';

function request(method,encodedData){
	return new Promise(
		resolve =>{
			uni.request({
			    url: constant.http+"?method="+method+'&INPUT_JSON_PARAM='+encodeURIComponent(encodedData),
				timeout: 3000,
			    success: (res) => {
			        // console.log(res);
					resolve(res);
			    },
				fail:(err) => {
					// console.log(err);
				},
				complete:(com) => {
					// console.log(com);
				}
			});
		}
	) 
}
module.exports = {
	request:request,
}