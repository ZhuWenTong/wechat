## Canvas
canvas绘制饼图 <br />
new Charts({ <br />
&nbsp;&nbsp;	canvasId: String, <br />
&nbsp;&nbsp;	type: String, //仅支持 'pie' <br />
&nbsp;&nbsp;	series: [{ //数据 <br />
&nbsp;&nbsp;		name: String, //项目名称 <br />
&nbsp;&nbsp;		data: Number, //项目数据<br />
&nbsp;&nbsp;		color: String //项目在饼图中呈现的颜色<br />
&nbsp;&nbsp;	}], <br />
&nbsp;&nbsp;	r: Number //半径 <br />
}) <br />
