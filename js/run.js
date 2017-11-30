window.onload=dw;
function dw(){
	window.setInterval("mm()",1000);
}
var i=1;
function mm(){
	var love=document.getElementById("miao1");
	love.src="images/new"+i+".jpg"
	i++;
	if(i>3){
		i=1;
	}
}
