const common = {
    toast(title) {
        wx.showToast({
            title,
            duration: 2000,
            mask: true
        })
    },
    toastWarn(title) {
        wx.showToast({
            title,
            image: '/images/err.png',
            duration: 2000,
            mask: true
        })
    },
    /**
     * @date 2017-11-23
     * 获取当前网络状态
     */
    getNetwork(self) {
        wx.getNetworkType({
            success: (res) => {
                console.log(res)
                if(res.networkType == 'none') {
                    self.setData({
                        hasNetwork: false      
                    })
                } else {
                    self.setData({
                        hasNetwork: true
                    })
                }
            }
        })
    }
}
module.exports = common;