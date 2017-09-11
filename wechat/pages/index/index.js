Page({
    data: {
        current: 0,
        wxdemo: [{
            demo: 'scroll-view',
            index: 0
        }, {
            demo: 'form',
            index: 1
        }, {
            demo: 'map',
            index: 2
        }, {
            demo: 'template',
            index: 3
        }, {
            demo: 'tabBar-show',
            index: 4
        }, {
            demo: 'tabBar-info',
            index: 5
        }],
        amount:[
            {
                id:1,
                num:0
            },
            {
                id:2,
                num:0
            }
        ]
    },
    onLoad(options) {

    },
    onReady() {

    },
    onShow() {
        wx.createSelectorQuery().select('.box').boundingClientRect((rect) => {
            // rect.id 

            // 节点的ID
            // rect.dataset // 节点的dataset
            // rect.left    // 节点的左边界坐标
            // rect.right   // 节点的右边界坐标
            // rect.top     // 节点的上边界坐标
            // rect.bottom  // 节点的下边界坐标
            // rect.width   // 节点的宽度
            // rect.height  // 节点的高度
            console.log(rect);
        }).exec()

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
        //console.log(swiperIndex)
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
                });
                break;
            case 4:
                wx.switchTab({
                    url: '../tabbar/show/show',
                });
                break;
            case 5:
                wx.switchTab({
                    url: '../tabbar/info/info',
                });
                break;
        }
    },
    add(event){
        var id = event.currentTarget.dataset.id,
            amount = this.data.amount,
            result = '';
        amount.some((i) => {
            if(i.id == id){
                result = i;
            }
        })
        result.num ++;
        this.setData({
            amount
        })
    },
    min(event){
        var id = event.currentTarget.dataset.id,
            amount = this.data.amount,
            result = '';
        amount.some((i) => {
            if (i.id == id) {
                result = i;
            }
        })
        result.num --;
        this.setData({
            amount
        })
    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
    onShareAppMessage() {

    }
})