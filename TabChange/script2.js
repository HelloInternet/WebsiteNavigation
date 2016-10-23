function $(id){
	return typeof id==="string"?document.getElementById(id):id;
}

window.onload=time;

function time(){
	var index=0;
	var timer=null;

	var lis=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');

	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){
			clearInterval(timer);
			changeTab(this.id);
		};
		lis[i].onmouseout=function(){
			timer=setInterval(autoPlay,2000);
		};
	}

	timer=setInterval(autoPlay,2000);
	
	function changeTab(curIndex){
		for(var j=0;j<lis.length;j++){
				lis[j].className="";
				divs[j].style.display="none";
			}
			lis[curIndex].className="selected";
			divs[curIndex].style.display="block";
			index=curIndex;
	}
	
	function autoPlay(){
		index++;
		if(index>=lis.length){
			index=0;
		}
		changeTab(index);
	}
}