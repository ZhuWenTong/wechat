export function add(obj) {
    //console.log(obj);
    return new Promise((resolve, reject) => {
        obj.num += 10;
        //console.log(obj);
        obj.self.setData({
            val: obj.num
        })
        setTimeout(() => {
            resolve(obj);
        }, 500)
    })
}

export function min(obj) {
    //console.log(obj)
    return new Promise((resolve, reject) => {
        obj.num -= 5;
        //console.log(obj)
        obj.self.setData({
            val: obj.num,
            loading: false
        })
        setTimeout(() => {
            resolve(obj.num);
        }, 500)
    })
}