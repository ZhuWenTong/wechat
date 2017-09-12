App({
    appid: 'wx9353c8c81e5dee45',
    appSecret: 'e2d85541d9460e7238921239bfcf2c1e',
    windowWidth:0,
    onLaunch() {
        wx.getSystemInfo({
            success: (res) => {
                //console.log(res)
                this.windowWidth = res.windowWidth;
            },
        })
    },
    onShow(options) {
        
    },
    onHide() {

    },
    onError(msg) {

    }
})
