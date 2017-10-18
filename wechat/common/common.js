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
    }
}
module.exports = common;