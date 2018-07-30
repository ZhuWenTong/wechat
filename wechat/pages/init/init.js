Page({
    data: {

    },
    onLoad() {

    },
    onShow() {

    },
    onGetUserInfo(e) {
        console.log(e)
        wx.getSetting({
            success: (res) => {
                console.log(res)
                if (!res.authSetting['scope.userInfo']) {

                } else {
                    console.log('do')
                    wx.setStorageSync('userInfo', JSON.stringify(e.detail.userInfo));
                    wx.switchTab({
                        url: '../index/index',
                    })
                }
            }
        })

    },
    onReady() {

    },
    onReachBottom() {
        
    }
})