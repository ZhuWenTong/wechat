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
        ]
    },
    onLoad(){

    },
    onShow(){

    },
    templateTap(event){
        console.log(event)
    },
    onReady(){

    },
    onReachBottom(){

    }
})