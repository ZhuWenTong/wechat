## info页面
>tabbar页面之一

1. 获取用户的信息

![info](https://raw.githubusercontent.com/ZhuWenTong/wechat/master/wechat/images/mdimg/info.png)

2. 使用 button 组件, 并将 open-type 指定为 getUserInfo 类型, 获取用户基本信息

``` <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
	<block wx:else>
		<image src="{{userInfo.avatarUrl}}"></image>
		<text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
```
3. 用户信息userInfo 保存在app.js中globalData中 

4. info页面使用`wx.canIUse('button.open-type.getUserInfo')` 和 `hasUserInfo` 控制 按钮和信息的展示
