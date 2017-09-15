Page({
    data:{

    },
    onLoad(options){
        var objData = JSON.parse(options.objData);
        this.setData({
            objData
        })
        wx.setNavigationBarTitle({
            title: objData.key,
        })
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: objData.color,
            animation:{
                duration: 1000,
                timingFunc: 'easeInOut'
            }
        })
    },
    onShow(){

    },
    onReady(){

    },
    onReachBottom(){

    }
})