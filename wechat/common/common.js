const common = {
    toast(){
        wx.showToast({
            title: 'test',
            duration:2000,
            mask:true
        })
    }
}
module.exports = common;