Page({
    data: {

    },
    onLoad(options) {

    },
    onReady() {

    },
    onShow() {
        wx.getLocation({
            success: (res) => {
                console.log(res)
                // this.setData({
                //     latitude: Number(res.latitude),
                //     longitude: Number(res.longitude)
                // });
                wx.openLocation({
                    latitude: Number(res.latitude),
                    longitude: Number(res.longitude),
                })
            },
            fail(err){
                console.log(err)
            }
        })
    },
    onUnload() {

    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    }
})