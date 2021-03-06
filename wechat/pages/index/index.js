var common = require('../../common/common.js'),
    app = getApp();
Page({
    data: {
        current: 0,
        wxdemo: [{
            demo: 'scroll-view',
            index: 0,
            title: 'scroll-view'
        }, {
            demo: 'form',
            index: 1,
            title: 'form'
        }, {
            demo: 'map',
            index: 2,
            title: 'map'
        }, {
            demo: 'template',
            index: 3,
            title: 'template'
        }, {
            demo: 'tabBar-show',
            index: 4,
            title: 'tabBar-show'
        }, {
            demo: 'tabBar-info',
            index: 5,
            title: 'tabBar-info'
        }, {
            demo: 'wx-charts',
            index: 6,
            title: 'wx-charts'
        }],
        amount: [
            {
                id: 1,
                num: 0
            },
            {
                id: 2,
                num: 0
            }
        ]
    },
    onLoad(options) {
        
    },
    onReady() {
        /**
         * 检查网络状况
         */
        wx.onNetworkStatusChange((res) => {
            if (res.networkType == 'none') {
                this.setData({
                    networkTip: false
                });
            } else {
                this.setData({
                    networkTip: true
                })
            }
        });
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
            //console.log(rect);
            this.setData({
                rect
            })
        }).exec((res) => {
            //console.log(res)
        });
        this.setData({
            autoplay: true
        });
    },
    swiper(event) {
        //console.log(event)
    },
    finish(event) {
        //console.log(event.detail)
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
        common.getNetwork(this);
        setTimeout(() => {
            var hasNetwork = this.data.hasNetwork;
            console.log(hasNetwork)
            if (!hasNetwork) {
                common.toastWarn('当前没有网络');
            } else {
                var swiperIndex = event.currentTarget.dataset.swiperIndex,
                    title = event.currentTarget.dataset.title;
                switch (swiperIndex) {
                    case 0:
                        wx.navigateTo({
                            url: `../scroll/scroll?title=${title}`,
                        });
                        break;
                    case 1:
                        wx.navigateTo({
                            url: `../form/form?title=${title}`,
                        });
                        break;
                    case 2:
                        wx.navigateTo({
                            url: `../map/map?title=${title}`,
                        });
                        break;
                    case 3:
                        wx.navigateTo({
                            url: `../template/template?title=${title}`,
                        });
                        break;
                    case 4:
                        wx.switchTab({
                            url: `../tabbar/show/show`,
                        });
                        break;
                    case 5:
                        wx.switchTab({
                            url: `../tabbar/info/info`,//wx.switchTab url不支持queryString
                        });
                        break;
                    case 6:
                        wx.navigateTo({
                            url: `../wxcharts/wxcharts?title=${title}`,
                        });
                        break;
                }
            }
        }, 50);
    },
    add(event) {
        var id = event.currentTarget.dataset.id,
            amount = this.data.amount,
            result = null;
        amount.some((i) => {
            if (i.id == id) {
                result = i;
                return;
            }
        })
        result.num++;
        this.setData({
            amount
        })
    },
    min(event) {
        var id = event.currentTarget.dataset.id,
            amount = this.data.amount,
            result = null;
        amount.some((i) => {
            if (i.id == id) {
                result = i;
                return;
            }
        })
        if (result.num == 0) {
            common.toastWarn('数量不能小于0！');
        } else {
            result.num--;
            this.setData({
                amount
            })
        }
    },
    int(event) {
        clearTimeout(this.timer);//清除延时器可以减少setData次数
        this.timer = setTimeout(() => {
            var id = event.currentTarget.dataset.id,
                value = event.detail.value,
                amount = this.data.amount,
                result = null;
            amount.map((i) => {
                if (i.id == id) {
                    result = i;
                    result.num = value;
                    return;
                }
            });
            this.setData({
                amount
            })
        }, 300);
    },
    /**
     * @date 2018-01-03
     * @desc 跳转至tabbar.wxml
     */
    goTabbar() {
        wx.navigateTo({
            url: '../tabbar/tabbar',
        })
    },
    goCanvas() {
        wx.navigateTo({
            url: '../canvas/canvas',
        })
    },
    /**
     * TODO 返回顶部
     */
    backTop() {
        wx.pageScrollTo({
            scrollTop: 0,
        })
    },
    /**
     * TODO 获取滚动条当前位置
     */
    onPageScroll(e) {
        console.log(e)
        if (e.scrollTop != 0) {
            this.setData({
                topShow: true
            })
        } else {
            this.setData({
                topShow: false
            })
        }
    },
    goBottom() {
        wx.createSelectorQuery().select('.content').boundingClientRect(function (rect) {
            // 使页面滚动到底部
            wx.pageScrollTo({
                scrollTop: rect.bottom
            })
        }).exec()
    },
    onPullDownRefresh() {

    },
    onHide() {//离开index轮播图停止动画
        this.setData({
            autoplay: false
        })
    },
    onReachBottom() {

    },
    onShareAppMessage() {

    }
})