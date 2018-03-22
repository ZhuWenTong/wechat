/**
 * {
 *      canvasId: '',
 *      type: 'pie',
 *      series: [{name:'',data: '',color:''},{}],//数据
 *      r:''//半径
 * }
 */
class Charts {
    constructor(opt) {
        this.opt = opt;
        console.log(opt);
        this.default = {
            color: ['#67C23A', '#E6A23C', '#F56C6C', '#409EFF', '#909399']
        };
        this.init();
    }
    init() {
        let opt = this.opt,
            ctx = wx.createCanvasContext(opt.canvasId),
            chartsType = opt.type,
            series = opt.series;
            ctx.setFontSize(24);
            ctx.setStrokeStyle('red');
            ctx.strokeText('饼图Canvas', 20, 24);
        if (chartsType == 'pie') {
            ctx.arc(180, 125, opt.r, 0, 2 * Math.PI);
            ctx.setFillStyle('#E4E7ED');
            ctx.fill();
            let totalData = 0;
            series.forEach((i) => {
                totalData += i.data;
            })
            series.forEach((i) => {
                i.angle = i.data / totalData * 2 * Math.PI;
            });
            console.log(series)
            series.forEach((i, index) => {
                this.index = index;
                i.sAngle = 0;
                i.eAngle = 0;
                i.x = 10;
                for(var j = 0; j < this.index; j++) {
                    i.sAngle += series[j].angle;
                    i.x = 10 + (this.index % 4) * 90;
                }
                for(var j = 0; j <= this.index; j++) {
                    i.eAngle += series[j].angle;
                }
            })
            console.log(series);
            series.forEach((i, index) => {
                this.index = index;
                ctx.beginPath();
                ctx.arc(180, 125, opt.r, i.sAngle, i.eAngle);
                //ctx.arc(180, 125, opt.r, -i.sAngle, -i.eAngle, true); // 逆时针
                ctx.setFillStyle(i.color || this.default.color[this.index % 5]);
                ctx.lineTo(180, 125); //连线回圆心
                ctx.fill();
                ctx.beginPath();
                ctx.setFillStyle(i.color || this.default.color[this.index % 5]);
                ctx.rect(i.x, 240 + Math.floor(index / 4 ) * 40, 80, 20);
                ctx.fill();
                ctx.setFontSize(12);
                ctx.fillText(i.name, i.x + 10, 236 + Math.floor(index / 4) * 40 );
                ctx.setFillStyle('#fafafa');
                ctx.fillText(`${i.data} (${(i.data * 100 / totalData).toFixed(2)}%)`, i.x + 6, 254 + Math.floor(index / 4) * 40);
            })
        }
        ctx.draw();
    }
    computed(chartsType) {
        

    }
}

export {Charts};