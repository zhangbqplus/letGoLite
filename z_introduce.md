# 奇葩的Uni-App

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。虽然如此，但是笔者在此仍然建议尽量只用它开发小程序，不要对它抱太多希望于App，甚至于H5也不要使用。

本篇文章主要介绍一下我们依托uniapp进行的进一步架构的项目myAppUniapp，使您在实际开发中增加一些开发效率，避免踩到一些没有必要的坑

这是项目的github地址：<https://github.com/zhangbqplus/myAppUniapp>

## 项目基本结构

```
┌─components            组件目录
│  └─components         组件目录
│  └─mycomponents       支付宝小程序组件目录
│  └─wxcomponents       微信、H5、App（不含nvue）、QQ小程序组价目录
│  └─ttcomponents       字节跳动小程序组件目录
│  └─swancomponents     百度小程序组件目录
├─hybrid                存放本地网页的目录，web-view引入的内容
├─platforms             存放各平台专用页面的目录
├─pages                 业务页面文件存放的目录
├─static                存放应用引用静态资源（如图片、视频等）的目录
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
├─pages.json            配置页面路由、导航条、选项卡等页面类信息
└─uni.scss            	内置样式变量
```

