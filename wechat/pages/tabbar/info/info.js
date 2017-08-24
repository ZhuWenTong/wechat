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
        })
    },
    onShow() {

    },
    onReady() {

    },
    onReachBottom() {

    }
})