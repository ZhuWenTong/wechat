Page({
    data: {

    },
    onLoad() {
        wx.getUserInfo({
            success:(res) => {
                //console.log(res)
                this.setData({
                    userInfo: res.userInfo
                })
            }
        });
        wx.getSystemInfo({
            success: (res) => {
                //console.log(res)
                this.setData({
                    systemInfo: res
                })
            }
        })
    },
    onShow() {

    },
    onReady() {

    },
    onReachBottom() {

    }
})