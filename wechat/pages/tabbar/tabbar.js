import {add, min, multiple, divsion, finish, beAgain} from 'promise.js';
Page({
    data: {
        val: 10,
        tit: '点击按钮开始',
        loading: false
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
    onReady() {

    },
    onReachBottom() {

    }
})