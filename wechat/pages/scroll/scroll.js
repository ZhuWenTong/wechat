Page({
    data: {

    },
    onLoad(options) {
        console.log(options)
        this.setData({
            options
        })
    },
    onShow() {
        wx.setNavigationBarColor({//设置头部导航背景颜色
            frontColor: '#ffffff',
            backgroundColor: '#972620',
            animation: {
                duration: 2000,
                timingFunc: 'easeInOut'
            }
        })
    },
    toBottom() {
        console.log('滚动到底部')
    },
    containerTap: function (res) {
        console.log(res.touches[0]);
        var x = res.touches[0].pageX;
        var y = res.touches[0].pageY + 85;
        this.setData({
            rippleStyle: ''
        });
        this.setData({
            rippleStyle: `top: ${y}px;left: ${x}px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;`
        });
    },
    onReady() {

    },
    onReachBottom() {

    }
})