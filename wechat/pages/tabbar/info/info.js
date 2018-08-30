var app = getApp();
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad(options) {
        console.log(app)
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
        wx.getSystemInfo({
            success: res => {
                //console.log(res);
                this.setData({
                    systemInfo: res
                })
            }
        })
        // this.setData({
        //     userInfo: JSON.parse(wx.getStorageSync('userInfo')),
        //     systemInfo: app.systemInfo
        // })
    },
    onShow() {

    },
    getUserInfo(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onReady() {

    },
    onReachBottom() {

    }
})