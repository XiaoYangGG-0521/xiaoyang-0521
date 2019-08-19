var a1=parseInt(prompt("请输入一个数字"));
var a2=parseInt(prompt("请输入一个数字"));
var a3=parseInt(prompt("请输入一个数字"));
if (!isNaN(a1)&&!isNaN(a2)&&!isNaN(a3)) {
	alert("计算之后的值是："+(a1+a2-a3))
} else{
	alert("您输入有误，请重新输入")
}