var Charts = require('../../util/wxcharts-min.js'),
    app = getApp(),
    chart1 = null;
Page({
    data:{

    },
    onLoad(options){
        console.log(options);
        this.setData({
            windowWidth: app.windowWidth
        })
    },
    onShow(){
        chart1 = new Charts({
            canvasId: 'pieCanvas',
            type: 'pie',
            title: {
                name: '成交量',
                fontSize: 20,
                color: '#ac0'
            },
            disablePieStroke: true,
            series: [{
                name: '成交量1',
                data: 15,
                color: '#20A0FF'
            }, {
                name: '成交量2',
                data: 35,
                color: '#13CE66'
            }, {
                name: '成交量3',
                data: 78,
                color: '#F7BA2A'
            }, {
                name: '成交量4',
                data: 63,
                color: '#FF4949'
            }],
            width: app.windowWidth ,
            height: 200,
            dataLabel: true
        });
        new Charts({
            canvasId: 'lineCanvas',
            type: 'line',
            background: '#eeeeee',
            categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
            series: [{
                name: '进口',
                data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
                format: function (val) {
                    return val.toFixed(2) + '万';
                },
                color:'#FF4949'
            }, {
                name: '出口',
                data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
                format: function (val) {
                    return val.toFixed(2) + '万';
                },
                color: '#F7BA2A'
            }, {
                name: 'zwt',
                data: [0.50, 0.87, 1.15, 1.38, 1.59, 1.99],
                format: function (val) {
                    return val.toFixed(2) + '万';
                },
                color: '#20A0FF'
            }],
            xAxis: {
                gridColor: 'blue',
                fontColor: 'red',
                disableGrid: false,
                type: 'calibration'
            },
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                disabled: false,
                min: 0,
                gridColor: '#58B7FF',
                fontColor: 'red',
                titleFontColor: 'blue'
            },
            width: app.windowWidth,
            height: 200
        });
        new Charts({
            canvasId: 'columnCanvas',
            type: 'column',
            background:'#eeeeee',
            categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
            series: [{
                name: '成交量1',
                data: [15, 20, 45, 37, 4, 80],
                color: '#FF4949'
            }, {
                name: '成交量2',
                data: [60, 30, 55, 90, 24, 8],
                color: '#F7BA2A'
            }, {
                name: '成交量3',
                data: [70, 40, 65, 100, 34, 18],
                color: '#20A0FF'
            }, {
                name: '成交量4',
                data: [80, 50, 75, 110, 44, 28],
                color: '#13CE66'
            }],
            yAxis: {
                format: function (val) {
                    return val + '万';
                }
            },
            width: app.windowWidth,
            height: 200,
            dataLabel: true
        });
        new Charts({
            canvasId: 'areaCanvas',
            type: 'area',
            background: '#eeeeee',
            categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
            series: [{
                name: '成交量1',
                data: [70, 40, 65, 100, 34, 18],
                format: function (val) {
                    return val.toFixed(2) + '万';
                },
                color: '#8492A6'
            }, {
                name: '成交量2',
                data: [15, 20, 45, 37, 4, 80],
                format: function (val) {
                    return val.toFixed(2) + '万';
                },
                color: '#58B7FF'
            }],
            yAxis: {
                format: function (val) {
                    return val + '万';
                }
            },
            width: app.windowWidth,
            height: 200
        });
    },
    touchHandler(e){
        console.log(chart1.getCurrentDataIndex(e))
    },
    onReady(){

    },
    onReachBottom(){

    }
})