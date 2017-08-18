Page({
    data: {
        current: 0,
        wxdemo: [
            {
                demo: 'scroll-view',
                index: 0
            },
            {
                demo: 'form',
                index: 1
            },
            {
                demo: 'map',
                index: 2
            },
            {
                demo: 'template',
                index: 3
            }
        ]
    },
    onLoad(options) {

    },
    onReady() {

    },
    onShow() {

    },
    swiper(event) {
        //console.log(event)
    },
    tabsChange(event) {
        //console.log(event)
        var current = event.detail.current;
        this.setData({
            current
        })
    },
    tabTap(event) {
        //console.log(event.currentTarget.dataset.current)
        var current = event.currentTarget.dataset.current;
        this.setData({
            current
        })
    },
    swiperTap(event) {
        var swiperIndex = event.currentTarget.dataset.swiperIndex;
        console.log(swiperIndex)
        switch (swiperIndex) {
            case 0:
                wx.navigateTo({
                    url: '../scroll/scroll',
                });
                break;
            case 1:
                wx.navigateTo({
                    url: '../form/form',
                });
                break;
            case 2:
                wx.navigateTo({
                    url: '../map/map',
                });
                break;
            case 3:
                wx.navigateTo({
                    url: '../template/template',
                })
        }
    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
    onShareAppMessage() {

    }
})