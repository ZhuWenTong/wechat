## 处理异步
1. promise
```
	new Promise((resolve, reject) => {
		resolve(obj)
	}).then(fn1).then(fn2).catch(err => console.log(err));
	fn1(obj) {
		return new Promise((resolve, reject) => {
			// code
			resolve(data);
		})
	}
	fn2(data) {
		// code
	}
```
2. async await

> 引入generator支持库 `cnpm install --save-dev regenerator` 拿出regenerator-runtime

```
	fn1(params) {
		return new Promise((resolve, reject) => {
			// code
			resolve(data)
		})
	}
	fn2(data) {
		return new Promise((resolve, reject) => {
			// code
			resolve(data)
		})
	}
	async do() { // 调用do
		let f1 = await this.fn1(params),
			f2 = await this.fn2(f1); // 最终处理
	}
```