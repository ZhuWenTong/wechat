## Canvas
canvas绘制饼图 <br />
new Charts({ <br />
&nbsp;&nbsp;&nbsp;&nbsp;	canvasId: String, <br />
&nbsp;&nbsp;&nbsp;&nbsp;	type: String, &nbsp;&nbsp;//仅支持 'pie' <br />
&nbsp;&nbsp;&nbsp;&nbsp;	series: [{ &nbsp;&nbsp;//数据 <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	name: String, &nbsp;&nbsp;//项目名称 <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	data: Number, &nbsp;&nbsp;//项目数据<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	color: String &nbsp;&nbsp;//项目在饼图中呈现的颜色<br />
&nbsp;&nbsp;&nbsp;&nbsp;		}], <br />
&nbsp;&nbsp;&nbsp;&nbsp;	r: Number &nbsp;&nbsp;//半径 <br />
}) <br />
