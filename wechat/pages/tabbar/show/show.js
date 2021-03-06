var common = require('../../../common/common.js');
Page({
    data: {
        btns: [{
            content: 'item1',
            select: true
        }, {
            content: 'item2',
            select: false
        }, {
            content: 'item3',
            select: false
        }],
        waitshow: true
    },
    onLoad(options) {

    },
    onShow() {
        this.setData({
            waitshow: true
        })
        this.timer = setTimeout(() => {
            this.setData({
                waitshow: false
            })
        }, 2000);
    },
    onReady() {

    },
    onToastTap(event) {
        // wx.showToast({
        //     title: 'toast',
        //     mask: true,
        //     duration :2000,
        //     image: '/images/show0.png'
        // })
        var title = 'demo'
        common.toast(`toast ${title}`);
    },
    onLoadTap(event) {
        wx.showLoading({
            title: 'loading...',
            mask: true
        });
        setTimeout(() => {
            wx.hideLoading();
        }, 2000)
    },
    onModalTap(event) {
        wx.showModal({
            title: 'showModal',
            content: 'Are you sure?',
            showCancel: true,
            cancelText: '取消',
            confirmText: '确定',
            success(res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            },
            fail(err) {
                console.log(err)
            }
        })
    },
    openPdf(event) {
        wx.downloadFile({
            url: 'http://api.idocv.com/view/KklmYOf',
            success: (res) => {
                console.log(res);
                var filePath = res.tempFilePath;
                wx.openDocument({
                    filePath,
                    fileType: 'pdf',
                    success: (resq) => {
                        console.log(resq, '打开文档成功')
                    },
                    fail: (err) => {
                        console.log(err)
                    }
                })
            }
        })
    },
    imgInfo(event) {
        wx.getImageInfo({
            src: '/images/index.png',
            success: (res) => {
                console.log(res)
            }
        })
    },
    chooseImg(event) {
        wx.chooseImage({
            success: function (res) {
                console.log(res)
            },
        })
    },
    scanCode() {
        wx.scanCode({
            success: (res) => {
                console.log(res)
            }
        })
    },
    onBtnTap(event) {
        var content = event.currentTarget.dataset.content,
            btns = this.data.btns;
        btns.map((i) => {
            if(i.content == content) {
                i.select = !i.select;
            }
        })
        this.setData({
            btns
        })
    },
    onPullDownRefresh() {
        console.log('开始下拉刷新');
        wx.showNavigationBarLoading();
        setTimeout(() => {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
            console.log('下拉刷新停止');
        }, 2000)
    },
    onReachBottom() {

    },
    onHide() {
        this.setData({
            waitshow: false
        })
        clearTimeout(this.timer);
    }
})