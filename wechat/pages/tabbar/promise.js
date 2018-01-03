export function add(obj) {
    //console.log(obj);
    return new Promise((resolve, reject) => {
        obj.num += 10;
        //console.log(obj);
        obj.self.setData({
            val: obj.num,
            tit: `${obj.self.data.val} + 10 = `
        })
        setTimeout(() => {
            resolve(obj);
        }, 2000)
    })
}

export function min(obj) {
    //console.log(obj)
    return new Promise((resolve, reject) => {
        obj.num -= 5;
        //console.log(obj)
        obj.self.setData({
            val: obj.num,
            tit: `${obj.self.data.val} - 5 = `
        })
        setTimeout(() => {
            resolve(obj);
        }, 2000)
    })
}

export function multiple(obj) {
    return new Promise((resolve, reject) => {
        obj.num *= 10;
        obj.self.setData({
            val: obj.num,
            tit: `${obj.self.data.val} * 10 = `
        })
        setTimeout(() => {
            resolve(obj);
        }, 2000);
    })
}

export function divsion(obj) {
    return new Promise((resolve, reject) => {
        obj.num /= 5;
        obj.self.setData({
            val: obj.num,
            tit: `${obj.self.data.val} / 5 = `
        });
        setTimeout(() => {
            resolve(obj);
        }, 2000);
    })
}

export function finish(obj) {
    return new Promise((resolve, reject) => {
        obj.self.setData({
            tit: '结果为: '
        });
        setTimeout(() => {
            resolve(obj);
        }, 2000)
    })
}

export function beAgain(obj) {
    return new Promise((resolve, reject) => {
        obj.self.setData({
            tit: '点击按钮开始',
            loading: false
        })
    })
}