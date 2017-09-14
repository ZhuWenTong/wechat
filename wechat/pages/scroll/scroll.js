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
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ff0000',
            animation: {
                duration: 2000,
                timingFunc: 'easeInOut'
            }
        })
    },
    onReady(){

    },
    onReachBottom(){
        
    }
})