import  cfg from "./configure.js";

// 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
const navigateTo = function(getOpt){
	/**
	 * getOpt 参数 url，infor，fun，set
	 * url 访问路径
	 * infor 传递数据
	 * encode 是否编码传递 encode:true 编码 为数字时为编码次数
	 * fun  回调函数  成功，失败，完成
	 * 		success:(res)=> {},fail:(res)=> {},complete:(res)=> {}
	 * set 设置 
	 * 		url:-1, //不添加公共常量
	 * 		animationType: -1,//等于-1时不执行公共常量，有内容时执行内容 
	 * 		animationDuration:-1 //等于-1时不执行公共常量，有内容时执行内容 时间单位为ms
	 * 
	 * 接收页面的所有参数都在item中
	 */
	let opt = {};
	if(getOpt){
		if(getOpt.set){
			if(getOpt.set.url && getOpt.set.url != -1){
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}else if(getOpt.set.url && getOpt.set.url == -1){
				opt.url = getOpt.url;
			}else{
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}
			if(getOpt.set.animationType && getOpt.set.animationType != -1){
				opt.animationType = getOpt.set.animationType;
			}else if(getOpt.set.animationType && getOpt.set.animationType == -1){}else{
				opt.animationType = cfg.ANIMATIONTYPE;
			}
			if(getOpt.set.animationDuration && getOpt.set.animationDuration != -1){
				opt.animationDuration = getOpt.set.animationDuration;
			}else if(getOpt.set.animationDuration && getOpt.set.animationDuration != -1){}else{
				opt.animationDuration = cfg.ANIMATIONDURATION;
			}
		}else{
			opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			opt.animationType = cfg.ANIMATIONTYPE;
			opt.animationDuration = cfg.ANIMATIONDURATION;
		}
		if(getOpt.fun){
			if(getOpt.fun.success){
				opt.success = getOpt.fun.success;
			}
			if(getOpt.fun.complete){
				opt.complete = getOpt.fun.complete;
			}
			if(getOpt.fun.fail){
				opt.fail = getOpt.fun.fail;
			}
		}
		if(getOpt.infor){
			let inforThis = getOpt.infor;
			let urlinfor = "";
			for(var item in getOpt.infor) {
				urlinfor = urlinfor + "&" + item + "=" + inforThis[item];
			}
			if(urlinfor){
				urlinfor = urlinfor.substr(1);
				if(getOpt.encode){
					let encodeNum = getOpt.encode == true ? 1 : parseInt(getOpt.encode);
					for (let i = 0; i < encodeNum; i++) {
						urlinfor = encodeURIComponent(JSON.stringify(urlinfor));
					}
				}
				urlinfor = "?item=" + urlinfor;
			}
			opt.url = opt.url + urlinfor;
		}
		uni.navigateTo(opt);
	}else{
		console.log("navigateTo 未输入参数");
	}
};
// 关闭当前页面，跳转到应用内的某个页面。
const redirectTo = function(getOpt){
	/**
	 * getOpt 参数 url，infor，fun，set
	 * url 访问路径
	 * infor 传递数据
	 * encode 是否编码传递 encode:true 编码 为数字时为编码次数
	 * fun  回调函数  成功，失败，完成
	 * 		success:(res)=> {},fail:(res)=> {},complete:(res)=> {}
	 * set 设置 
	 * 		url:-1, //不添加公共常量
	 * 
	 * 接收页面的所有参数都在item中
	 */
	let opt = {};
	if(getOpt){
		if(getOpt.set){
			if(getOpt.set.url && getOpt.set.url != -1){
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}else if(getOpt.set.url && getOpt.set.url == -1){
				opt.url = getOpt.url;
			}else{
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}
		}else{
			opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
		}
		if(getOpt.fun){
			if(getOpt.fun.success){
				opt.success = getOpt.fun.success;
			}
			if(getOpt.fun.complete){
				opt.complete = getOpt.fun.complete;
			}
			if(getOpt.fun.fail){
				opt.fail = getOpt.fun.fail;
			}
		}
		if(getOpt.infor){
			let inforThis = getOpt.infor;
			let urlinfor = "";
			for(var item in getOpt.infor) {
				urlinfor = urlinfor + "&" + item + "=" + inforThis[item];
			}
			if(urlinfor){
				urlinfor = urlinfor.substr(1);
				if(getOpt.encode){
					let encodeNum = getOpt.encode == true ? 1 : parseInt(getOpt.encode);
					for (let i = 0; i < encodeNum; i++) {
						urlinfor = encodeURIComponent(JSON.stringify(urlinfor));
					}
				}
				urlinfor = "?item=" + urlinfor;
			}
			opt.url = opt.url + urlinfor;
		}
		uni.redirectTo(opt);
	}else{
		console.log("redirectTo 未输入参数");
	}
}
// 关闭所有页面，打开到应用内的某个页面。
const reLaunch = function(getOpt){
	/**
	 * getOpt 参数 url，infor，fun，set
	 * url 访问路径
	 * infor 传递数据
	 * encode 是否编码传递 encode:true 编码 为数字时为编码次数
	 * fun  回调函数  成功，失败，完成
	 * 		success:(res)=> {},fail:(res)=> {},complete:(res)=> {}
	 * set 设置 
	 * 		url:-1, //不添加公共常量
	 * 
	 * 接收页面的所有参数都在item中
	 */
	let opt = {};
	if(getOpt){
		if(getOpt.set){
			if(getOpt.set.url && getOpt.set.url != -1){
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}else if(getOpt.set.url && getOpt.set.url == -1){
				opt.url = getOpt.url;
			}else{
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}
		}else{
			opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
		}
		if(getOpt.fun){
			if(getOpt.fun.success){
				opt.success = getOpt.fun.success;
			}
			if(getOpt.fun.complete){
				opt.complete = getOpt.fun.complete;
			}
			if(getOpt.fun.fail){
				opt.fail = getOpt.fun.fail;
			}
		}
		if(getOpt.infor){
			let inforThis = getOpt.infor;
			let urlinfor = "";
			for(var item in getOpt.infor) {
				urlinfor = urlinfor + "&" + item + "=" + inforThis[item];
			}
			if(urlinfor){
				urlinfor = urlinfor.substr(1);
				if(getOpt.encode){
					let encodeNum = getOpt.encode == true ? 1 : parseInt(getOpt.encode);
					for (let i = 0; i < encodeNum; i++) {
						urlinfor = encodeURIComponent(JSON.stringify(urlinfor));
					}
				}
				urlinfor = "?item=" + urlinfor;
			}
			opt.url = opt.url + urlinfor;
		}
		uni.reLaunch(opt);
	}else{
		console.log("redirectTo 未输入参数");
	}
}
// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
const switchTab = function(getOpt){
	/**
	 * getOpt 参数 url，infor，fun，set
	 * url 访问路径
	 * infor 传递数据
	 * encode 是否编码传递 encode:true 编码 为数字时为编码次数
	 * fun  回调函数  成功，失败，完成
	 * 		success:(res)=> {},fail:(res)=> {},complete:(res)=> {}
	 * set 设置 
	 * 		url:-1, //不添加公共常量
	 * 
	 * 接收页面的所有参数都在item中
	 */
	let opt = {};
	if(getOpt){
		if(getOpt.set){
			if(getOpt.set.url && getOpt.set.url != -1){
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}else if(getOpt.set.url && getOpt.set.url == -1){
				opt.url = getOpt.url;
			}else{
				opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
			}
		}else{
			opt.url = cfg.URL_PRO ? (cfg.URL_PRO + getOpt.url) : getOpt.url;
		}
		if(getOpt.fun){
			if(getOpt.fun.success){
				opt.success = getOpt.fun.success;
			}
			if(getOpt.fun.complete){
				opt.complete = getOpt.fun.complete;
			}
			if(getOpt.fun.fail){
				opt.fail = getOpt.fun.fail;
			}
		}
		if(getOpt.infor){
			let inforThis = getOpt.infor;
			let urlinfor = "";
			for(var item in getOpt.infor) {
				urlinfor = urlinfor + "&" + item + "=" + inforThis[item];
			}
			if(urlinfor){
				urlinfor = urlinfor.substr(1);
				if(getOpt.encode){
					let encodeNum = getOpt.encode == true ? 1 : parseInt(getOpt.encode);
					for (let i = 0; i < encodeNum; i++) {
						urlinfor = encodeURIComponent(JSON.stringify(urlinfor));
					}
				}
				urlinfor = "?item=" + urlinfor;
			}
			opt.url = opt.url + urlinfor;
		}
		uni.switchTab(opt);
	}else{
		console.log("redirectTo 未输入参数");
	}
}
// 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
const navigateBack = function(getOpt){
	/**
	 * getOpt 参数 delta，infor，fun，set
	 * 
	 * delta 访问第几层页面
	 * infor  传递数据
	 * encode 是否编码传递 encode:true 编码 为数字时为编码次数
	 * set 设置 
	 * 		url:-1, //不添加公共常量
	 * 		animationType: -1,//返回动画 等于-1时不执行公共常量，有内容时执行内容 
	 * 		animationDuration:-1 //动画时间 等于-1时不执行公共常量，有内容时执行内容 时间单位为ms
	 * 
	 * 接收页面的所有参数都在item中
	 */
	let opt = {};
	if(getOpt){
		if(getOpt.set){
			if(getOpt.set.animationType && getOpt.set.animationType != -1){
				opt.animationType = getOpt.set.animationType;
			}else if(getOpt.set.animationType && getOpt.set.animationType == -1){}else{
				opt.animationType = cfg.ANIMATIONTYPEBACK;
			}
			if(getOpt.set.animationDuration && getOpt.set.animationDuration != -1){
				opt.animationDuration = getOpt.set.animationDuration;
			}else if(getOpt.set.animationDuration && getOpt.set.animationDuration != -1){}else{
				opt.animationDuration = cfg.ANIMATIONDURATION;
			}
		}else{
			opt.animationType = cfg.ANIMATIONTYPEBACK;
			opt.animationDuration = cfg.ANIMATIONDURATION;
		}
		if(!getOpt.delta){
			opt.delta = 1;
		}
		if(getOpt.infor){
			let inforThis = getOpt.infor;
			let urlinfor = "";
			for(var item in getOpt.infor) {
				urlinfor = urlinfor + "&" + item + "=" + inforThis[item];
			}
			if(urlinfor){
				
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - opt.delta -1 ];  //上一页页面实例
				
				urlinfor = urlinfor.substr(1);
				if(getOpt.encode){
					let encodeNum = getOpt.encode == true ? 1 : parseInt(getOpt.encode);
					for (let i = 0; i < encodeNum; i++) {
						urlinfor = encodeURIComponent(JSON.stringify(urlinfor));
					}
				}
				prevPage.$vm.pageDataBack = urlinfor;
			}
		}
		uni.navigateBack(opt);
	}else{
		opt.animationType = cfg.ANIMATIONTYPEBACK;
		opt.animationDuration = cfg.ANIMATIONDURATION;
		opt.delta = 1;
		uni.navigateBack();
	}
};
//获取某个堆栈中某个页面的信息 opt = 0 或者 无参数时返回当前页
const nowPage = function(opt){
	if(!opt){
		opt = 0;
	}
	let pages = getCurrentPages();  //获取所有页面栈实例列表
	let nowPage = pages[ pages.length - opt - 1];  //当前页页面实例
	return nowPage;
}
//获取某个堆栈中某个页面由上一页返回的信息 opt = 0 或者 无参数时返回当前页
const nowPageData = function(opt){
	if(!opt){
		opt = 0;
	}
	let pages = getCurrentPages();  //获取所有页面栈实例列表
	let nowPage = pages[ pages.length - opt - 1];  //当前页页面实例
	return nowPage.$vm.pageDataBack;
}
//给堆栈中的某个页面赋值 
const setPageData = function(opt){
	/**
	 * opt 有两个值
	 * delta 第几层 0 或者不存在为当前层
	 * infor  添加的属性及信息  属性为对象
	 */
	if(!opt.delta){
		opt = 0;
	}
	let pages = getCurrentPages();  //获取所有页面栈实例列表
	let nowPage = pages[ pages.length - opt.delta - 1];  //当前页页面实例
	for(var item in opt.infor) {
		nowPage.$vm["_data_pages_put_" + item] = opt.infor[item];
	}
}
//获取某个页面赋值内容，和 nowPageData相对应
const getPageData = function(opt){
	/**
	 * opt 有两个值
	 * delta 第几层 0 或者不存在为当前层
	 * name   属性名称
	 */
	if(!opt.delta){
		opt = 0;
	}
	let pages = getCurrentPages();  //获取所有页面栈实例列表
	let nowPage = pages[ pages.length - opt.delta - 1];  //当前页页面实例
	return nowPage.$vm["_data_pages_put_" + opt.name];
}




export default {  
    navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack,
	nowPage,
	nowPageData,
	setPageData,
	getPageData
}