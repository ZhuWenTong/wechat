Page({
    data: {
        current: 0
    },
    onLoad(options) {

    },
    onReady() {

    },
    onShow() {

    },
    swiper(event){
        console.log(event)
    },
    tabsChange(event){
        console.log(event)
        var current = event.detail.current;
        this.setData({
            current
        })
    },
    tabTap(event){
        console.log(event.currentTarget.dataset.current)
        var current = event.currentTarget.dataset.current;
        this.setData({
            current
        })
    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
    onShareAppMessage() {

    }
})