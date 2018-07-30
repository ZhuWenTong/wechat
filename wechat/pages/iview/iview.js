Page({
    data: {
        current: 0
    },
    onLoad() {

    },
    onShow() {

    },
    handleClick() {
        const current = this.data.current + 1 > 3 ? 0 : this.data.current + 1;
        this.setData({
            current
        })
    }
})