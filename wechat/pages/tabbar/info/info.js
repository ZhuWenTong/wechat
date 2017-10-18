var app = getApp();
Page({
    data: {

    },
    onLoad(options) {
        wx.getUserInfo({
            success: (res) => {
                //console.log(res)
                this.setData({
                    userInfo: res.userInfo
                })
            }
        });
        this.setData({
            systemInfo: app.systemInfo
        })
    },
    onShow() {

    },
    onReady() {

    },
    onReachBottom() {

    }
})