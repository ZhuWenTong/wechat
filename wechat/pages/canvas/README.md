## Canvas
canvas绘制饼图 <br />
new Charts({ <br />
	canvasId: String, <br />
	type: String, //仅支持 'pie' <br />
	series: [{ //数据 <br />
		name: String, //项目名称 <br />
		data: Number, //项目数据<br />
		color: String //项目在饼图中呈现的颜色<br />
	}], <br />
	r: Number //半径 <br />
}) <br />
