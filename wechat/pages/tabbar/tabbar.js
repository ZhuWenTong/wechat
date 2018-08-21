import {add, min, multiple, divsion, finish, beAgain} from 'promise.js';
import regeneratorRuntime from '../../util/regenerator-runtime/runtime-module.js';
var common = require('../../common/common.js');
Page({
    data: {
        val: 10,
        tit: '点击按钮开始',
        loading: false,
        iBtnLoading: false
    },
    onLoad() {

    },
    onShow() {
        var p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('p1');
            }, 1000);
        }),
        p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('p2');
            }, 2000);
        });
        Promise.all([p1, p2]).then(result => console.log(result));
        Promise.race([p1, p2]).then(result => console.log(result))

    },
    /**
     * @date 2018-01-03
     * @desc promise
     */
    myPromise() {
        var self = this;
        var obj = {
            num: self.data.val ? self.data.val : 10,
            self
        }
        var p = new Promise((resolve, reject) => {
            resolve(obj);
        })
        p.then(add).then(min).then(multiple).then(divsion).then(finish).then(beAgain).catch(err => console.log(err));
        this.setData({
            loading: true
        })
    },
    startScan() {
        wx.scanCode({
            success: (res) => {
                console.log(res)
                common.toast(res.result)
            }
        })
    },
    /**
     * Created by zwt at 2018/8/20
     * @description 使用async await 处理异步函数 需要引入generator支持库
     * cnpm install --save-dev regenerator 拿出regenerator-runtime
     */
    handleAsync() {
        console.log('do')
        this.lastStep('A');
        this.setData({
            iBtnLoading: true
        })
    },
    /**
     * @description 异步 第一步
     */
    firstStep(str) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                str += ' firstStep';
                console.log(str);
                resolve(str);
            }, 1000);
        })
    },
    secondStep(str) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                str += ' secondStep';
                console.log(str);
                resolve(str);
            }, 1000);
        })
    },
    /**
     * @description 异步最后执行
     */
    async lastStep(str) {
        let fir = await this.firstStep(str),
            sec = await this.secondStep(fir);
        console.log(sec + ' lastStep');
        this.setData({
            iBtnLoading: false
        })
    },
    onReady() {

    },
    onReachBottom() {

    }
})