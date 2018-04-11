## Canvas
> canvas绘制饼图 
```
import { Charts } from 'charts.js'; 
new Charts({ 
	canvasId: String, <br />
	type: String, &nbsp;&nbsp;//仅支持 'pie' 
	series: [{ &nbsp;&nbsp;//数据 
	name: String, &nbsp;&nbsp;//项目名称 
	data: Number, &nbsp;&nbsp;//项目数据
	color: String &nbsp;&nbsp;//项目在饼图中呈现的颜色
		}], 
	r: Number &nbsp;&nbsp;//半径
});
```
