## Canvas
> canvas绘制饼图 
```
import { Charts } from 'charts.js'; 
new Charts({ 
	canvasId: String, 
	type: String, 	//仅支持 'pie' 
	series: [{ 		//数据 
		name: String, 	//项目名称 
		data: Number, 	//项目数据
		color: String 	//项目在饼图中呈现的颜色
	}], 
	r: Number//半径
});
```
