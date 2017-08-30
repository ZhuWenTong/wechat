const common = {
    toast(title){
        wx.showToast({
            title,
            duration:2000,
            mask:true
        })
    }
}
module.exports = common;