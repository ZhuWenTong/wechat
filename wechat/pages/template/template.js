Page({
    data:{
        common:[
            {
                code:0,
                name:'zhangsan'
            },{
                code:1,
                name:'lisi'
            }
        ],
        iconTypes: [
            {
                type:'success',
                color:'',
                size:16
            },
            {
                type: 'success_no_circle',
                color: '',
                size: 17
            },
            {
                type: 'info',
                color: '',
                size: 18
            },
            {
                type: 'warn',
                color: '',
                size: 19
            },
            {
                type: 'waiting',
                color: '',
                size: 20
            },
            {
                type: 'cancel',
                color: '',
                size: 21
            },
            {
                type: 'download',
                color: '',
                size: 22
            },
            {
                type: 'search',
                color: '',
                size: 23
            },
            {
                type: 'clear',
                color: '',
                size: 24
            }
        ],
        family:[{
            parent: 'zhangsan',
            son: 3
        },{
            parent: 'lisi',
            son: 2
        },{
            parent: 'wangwu',
            son: 1
        }],
        obj: [{
            key: 'name',
            objdata: [{
                name: 'zhangsan'
            }, {
                name: 'lisi'
            }],
            color: '#F7BA2A'
        }, {
            key: 'age',
            objdata: [{
                age: 20
            }, {
                age: 18
            }],
            color: '#FF4949'
        }]
    },
    onLoad(options){
        console.log(options)
        this.setData({
            options
        })
    },
    onShow(){

    },
    templateTap(event){
        console.log(event)
    },
    onKeyTap(event){
        var key = event.currentTarget.dataset.key,
            obj = this.data.obj,
            objData = null;
        obj.some((i) => {
            if(i.key == key){
                objData = i;
                return;
            }
        });
        objData = JSON.stringify(objData);
        wx.navigateTo({
            url: `../obj/obj?objData=${objData}`
        })
    },
    onReady(){

    },
    onReachBottom(){

    }
})