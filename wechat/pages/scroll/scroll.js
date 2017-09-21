Page({
    data:{

    },
    onLoad(options){
        console.log(options)
        this.setData({
            options
        })
    },
    onShow(){
        wx.setNavigationBarColor({//设置头部导航背景颜色
            frontColor: '#ffffff',
            backgroundColor: '#972620',
            animation: {
                duration: 2000,
                timingFunc: 'easeInOut'
            }
        })
    },
    toBottom(){
        console.log('滚动到底部')
    },
    onReady(){

    },
    onReachBottom(){
        
    }
})