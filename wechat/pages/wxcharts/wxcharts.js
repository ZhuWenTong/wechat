var Charts = require('../../util/wxcharts-min.js'),
    app = getApp();
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
        new Charts({
            canvasId: 'pieCanvas',
            type: 'pie',
            series: [{
                name: '成交量1',
                data: 15,
            }, {
                name: '成交量2',
                data: 35,
            }, {
                name: '成交量3',
                data: 78,
            }, {
                name: '成交量4',
                data: 63,
            }],
            width: app.windowWidth ,
            height: 200,
            dataLabel: true
        });
        new Charts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
            series: [{
                name: '成交量1',
                data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
            }, {
                name: '成交量2',
                data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
            }],
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: app.windowWidth,
            height: 200
        });
        new Charts({
            canvasId: 'columnCanvas',
            type: 'column',
            categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
            series: [{
                name: '成交量1',
                data: [15, 20, 45, 37, 4, 80]
            }, {
                name: '成交量2',
                data: [60, 30, 55, 90, 24, 8]
            }, {
                name: '成交量3',
                data: [70, 40, 65, 100, 34, 18]
            }, {
                name: '成交量4',
                data: [80, 50, 75, 110, 44, 28]
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
            categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
            series: [{
                name: '成交量1',
                data: [70, 40, 65, 100, 34, 18],
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
            }, {
                name: '成交量2',
                data: [15, 20, 45, 37, 4, 80],
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
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
    onReady(){

    },
    onReachBottom(){

    }
})