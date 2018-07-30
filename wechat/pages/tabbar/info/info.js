var app = getApp();
Page({
    data: {

    },
    onLoad(options) {
        wx.getUserInfo({
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo
                })
            }
        });
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
    // getUserInfo(res) {
    //     console.log(res, this)
    //     this.setData({
    //         userInfo: res.detail.userInfo
    //     })
    // },
    onReady() {

    },
    onReachBottom() {

    }
})