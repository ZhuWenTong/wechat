var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(e)
        console.log(pieChart.getCurrentDataIndex(e));
    },        
    onLoad: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        pieChart = new wxCharts({
            animation: true,
            canvasId: 'pieCanvas',
            type: 'pie',
            series: [{
                name: '成交量1',
                data: 0,
                id:'12d',
                color:'red'
            }, {
                name: '成交量2',
                data: 35,
            }, {
                name: '成交量3',
                data: 78,
            }, {
                name: '成交量4',
                data: 63,
            }, {
                name: '成交量5',
                data: 35,
            }, {
                name: '成交量6',
                data: 78,
            }, {
                name: '成交量7',
                data: 63,
            }, {
                name: '成交量8',
                data: 35,
            }, {
                name: '成交量9',
                data: 78,
            }, {
                name: '成交量10',
                data: 78,
            }],
            width: windowWidth,
            height: 300,
            dataLabel: true,
        });
    }
});