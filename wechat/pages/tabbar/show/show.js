Page({
    data: {

    },
    onLoad() {

    },
    onShow() {

    },
    onReady() {

    },
    onToastTap(event){
        wx.showToast({
            title: 'toast',
            mask: true,
            duration :2000,
            image: '/images/show0.png'
        })
    },
    onLoadTap(event){
        wx.showLoading({
            title: 'loading...',
            mask: true
        });
        setTimeout(() => {
            wx.hideLoading();
        },2000)
    },
    onModalTap(event){
        wx.showModal({
            title: 'showModal',
            content: 'Are you sure?',
            showCancel: true,
            cancelText: '取消',
            confirmText: '确定',
            success(res){
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            },
            fail(err){
                console.log(err)
            }
        })
    },
    onPullDownRefresh(){
        console.log('开始下拉刷新');
        wx.showNavigationBarLoading();
        setTimeout(() => {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
            console.log('下拉刷新停止');
        },2000)
    },
    onReachBottom() {

    }
})