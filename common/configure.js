/* 页面跳转配置 */
const URL_PRO = "/pages/"; //页面跳转路径前缀
const ANIMATIONTYPE = "pop-in";//页面跳转动画  官方默认为 pop-in
const ANIMATIONTYPEBACK = "pop-in";//页面跳转返回  官方默认为 pop-out
	/**
	 * 显示动画					关闭动画					显示动画描述（关闭动画与之相反）
	 * 
	 * slide-in-right		slide-out-right				新窗体从右侧进入
	 * slide-in-left		slide-out-left				新窗体从左侧进入
	 * slide-in-top			slide-out-top				新窗体从顶部进入
	 * slide-in-bottom		slide-out-bottom			新窗体从底部进入
	 * pop-in				pop-out						新窗体从左侧进入，且老窗体被挤压而出
	 * fade-in				fade-out					新窗体从透明到不透明逐渐显示
	 * zoom-out				zoom-in						新窗体从小到大缩放显示
	 * zoom-fade-out		zoom-fade-in				新窗体从小到大逐渐放大并且从透明到不透明逐渐显示
	 * none					none						无动画
	 * 
	 */
const	ANIMATIONDURATION = 300;//动画时间，仅支持app  单位是ms  官方默认为300

export default {  
    URL_PRO,
	ANIMATIONTYPE,
	ANIMATIONDURATION
}
