import {add, min} from 'promise.js';
Page({
    data: {
        loading: false
    },
    onLoad() {

    },
    onShow() {

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
        p.then(add).then(min).catch(err => console.log(err));
        this.setData({
            loading: true
        })
    },
    onReady() {

    },
    onReachBottom() {

    }
})