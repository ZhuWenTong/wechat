Page({
    data: {

    },
    onLoad(options) {
        console.log(options)
    },
    onReady() {

    },
    onShow() {
        wx.getLocation({
            type: 'gcj02',
            success: (res) => {
                console.log(res)
                // this.setData({
                //     latitude: Number(res.latitude),
                //     longitude: Number(res.longitude)
                // });
                wx.openLocation({
                    latitude: Number(res.latitude),
                    longitude: Number(res.longitude),
                    scale: 28
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