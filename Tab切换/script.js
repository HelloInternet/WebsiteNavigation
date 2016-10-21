function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	//获取鼠标划过的标签和要显示内容的元素
	var titles=$('notice-tit').getElementsByTagName('li'),
			divs=$('notice-con').getElementsByTagName('div');
			if(titles.length!=divs.length){
				return;
			}
			//遍历titles下所有的li
			for(var i=0;i<titles.length;i++){
				titles[i].id=i;
				//改成onclick就是点击切换的效果
				titles[i].onmouseover=function(){
					for(var j=0;j<titles.length;j++){
						titles[j].className="";
						divs[j].style.display="none";
					}
					this.className="selected";
					divs[this.id].style.display="block";
				};
			}
};