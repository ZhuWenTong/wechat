Page({
    data:{
        animals:[
            {
                name:'熊猫',
                code:'0'
            },{
                name:'老虎',
                code:'1'
            },{
                name:'老鹰',
                code:'2'
            }
        ],
        index:0,
        lists:[
            [
                {
                    name:'a',
                    index:0
                },{
                    name:'b',
                    index:1
                }
            ],[
                {
                    name:'c',
                    index:2
                },{
                    name:'d',
                    index:3
                }
            ],[
                {
                    name:'e',
                    index:4
                },{
                    name:'f',
                    index:5
                }
            ]
        ],
        listIndex:[0,0,0],
        items: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' }
        ]
    },
    onLoad(options){
        console.log(options)
    },
    onShow(){

    },
    inputting(event){
        console.log(event.detail.value)
    },
    onBlur(event){
        console.log(event.detail.value)
    },
    inputed(event){
        console.log(event.detail.value)
    },
    animalsChange(event){
        //console.log(event)
        var index = event.detail.value;
        this.setData({
            index
        })
    },
    listChange(event){
        //console.log(event)
        var listIndex = event.detail.value;
        this.setData({
            listIndex
        })
        console.log(this.data.listIndex)
    },
    bindTimeChange(event){
        var time = event.detail.value;
        this.setData({
            time
        })
    },
    bindDateChange(event){
        var date = event.detail.value;
        this.setData({
            date
        })
    },
    radioChange(event){
        console.log(event.detail.value)
    },
    checkboxChange(event){
        console.log(event.detail.value)
    },
    formSubmit(e){
        console.log(e.detail.value)
    },
    formReset(){

    },
    onReady(){

    },
    onReachBottom(){

    }
})