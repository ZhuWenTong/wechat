import {Charts} from 'charts.js';
Page({
    data: {
        hidden: true
    },
    onShow() {
        new Charts({
            canvasId: 'pie',
            type: 'pie',
            series: [{
                name: 'zhangsan',
                data: 20,
                color: '#67C23A'
            }, {
                name: 'lisi',
                data: 35,
                color: '#E6A23C'
            }, {
                name: 'wangwu',
                data: 40,
                color: '#F56C6C'
            }, {
                name: 'maliu',
                data: 18,
                color: '#409EFF'
            }, {
                name: 'feiliks',
                data: 50,
                color: '#909399'
            }],
            r: 100
        })
    },
    onLoad() {

    },
    onReady() {
        //this.firstCanvas();
    },
    firstCanvas() {
        var ctx = wx.createCanvasContext('first-canvas');
        ctx.setStrokeStyle('#f56c6c');
        ctx.strokeRect(10, 10, 100, 100);
        ctx.beginPath();//同一个路径 setFillStyle()、setStrokeStyle()、setLineWidth()等设置

        var grd = ctx.createLinearGradient(0, 0, 100, 0); //渐变
        grd.addColorStop(0, '#f56c6c');
        grd.addColorStop(1, '#E6A23C');
        //grd.addColorStop(2, '#409EFF');
        ctx.setFillStyle(grd);
        ctx.fillRect(10, 120, 100, 100);
        ctx.beginPath();
        ctx.setFillStyle('#f56c6c');
        ctx.rect(120, 10, 100, 100);
        ctx.moveTo(220, 10);
        ctx.lineTo(120, 10);
        ctx.lineTo(220, 110);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(170, 170, 50, 0, 2 * Math.PI);
        ctx.setFillStyle('#E4E7ED');
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(170, 115);
        ctx.lineTo(170, 225);
        ctx.moveTo(115, 170);
        ctx.lineTo(225, 170);
        ctx.setStrokeStyle('#C0C4CC');
        ctx.stroke();
        ctx.setFontSize(12);
        ctx.setFillStyle('#606266');
        ctx.fillText('1.5 * PI', 150, 115);
        ctx.fillText('0', 230, 176);
        ctx.fillText('0.5 * PI', 150, 235);
        ctx.fillText('PI', 100, 176);
        ctx.fillText('O', 172, 182);

        ctx.beginPath();
        ctx.arc(170, 170, 50, 0, 1.5 * Math.PI);
        ctx.setStrokeStyle('#F56C6C');
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(170, 120, 2, 0, 2 * Math.PI);
        ctx.setFillStyle('#409EFF');
        ctx.fill();

        ctx.beginPath();
        ctx.arc(220, 170, 2, 0, 2 * Math.PI);
        ctx.setFillStyle('#E6A23C');
        ctx.fill();

        ctx.beginPath();
        ctx.arc(170, 170, 2, 0, 2 * Math.PI);
        ctx.setFillStyle('#67C23A');
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(230, 10);
        ctx.lineTo(280, 60);
        ctx.setStrokeStyle('#409eff');
        ctx.lineWidth = 10;
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 4;
        //ctx.rotate(10 * Math.PI / 180);
        ctx.strokeRect(250, 120, 100, 100);
        ctx.scale(0.5, 0.5);
        ctx.setStrokeStyle('#f56c6c');
        ctx.strokeRect(550, 290, 100, 100);
        ctx.scale(2.5, 2.5);
        ctx.setStrokeStyle('#67c23a');
        
        ctx.strokeRect(190, 86, 100, 100);
        
        ctx.draw();
    },
    start(e) {
    //    console.log(e)
        this.setData({
            hidden: false,
            x: e.touches[0].x.toFixed(2),
            y: e.touches[0].y.toFixed(2)
        })
    },
    move(e) {
        this.setData({
            x: e.touches[0].x.toFixed(2),
            y: e.touches[0].y.toFixed(2)
        })
    },
    end(e) {
        this.setData({
            hidden: true
        })
    },
    onReachBottom() {

    }
})