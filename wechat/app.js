App({
    appid: 'wx9353c8c81e5dee45',
    appSecret: 'e2d85541d9460e7238921239bfcf2c1e',
    systemInfo: null,
    onLaunch() {
        wx.getSystemInfo({
            success: (res) => {
                //console.log(res)
                this.systemInfo = res;
            },
        });
        wx.getSetting({
            success: res => {
                if(res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            this.globalData.userInfo = res.userInfo;
                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if(this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        }
                    })
                }
            }
        })
    },
    onShow(options) {

    },
    onHide() {

    },
    globalData: {
        userInfo: null
    },
    onError(msg) {

    }
})
