var word=document.getElementById("word");
var title=document.getElementById("title");
	content="&#12288;&#12288;border 边框宽窄、样式和颜色宽度： thin medium thick 非百分比和负值的数值样式： none hidden dotted dashed solid double groove ridge inset outset 等padding 盒子内容区和边框的间距没有设定内边距的情况下，内容紧挨着边框。内边距实际加在声明的盒子宽度上<br><br>&#12288;&#12288;margin 盒子与相邻元素的间距中和外边距和内边距样式表第一条规则叠加外边距垂直方向上的外边距会叠加(重叠），直到一个元素的外边距碰到另一个元素的边框为止。水平相邻的元素，它们的水平间距是相邻外边距之和。外边距的单位为文本元素设置外边距时通常需要混合使用不同的单位左右边距使用像素<br><br>&#12288;&#12288;使文本始终和包含元素边界保持固定间距上下外边距以em为单位，让段间距随字号变化而响应增大或缩小";
var n=0;

timer=setInterval(function(){
	word.innerHTML=content.substring(0,n)
	n++;
	if(word.innerHTML==content){
		console.log("stop");
		clearInterval(timer);
	}
},50)