// var a = parseInt(prompt("请输入一个正整数"));
// if (!isNaN(a)) {
// 	if (a % 5 == 0 && a % 6 == 0) {
// 		alert("这个数既能被5整除也能被6整除");
// 	} else if (a % 5 == 0 || a % 6 == 0) {
// 		alert("这个数可以被5整除，但不可以被6整除");
// 	} else if (a % 6 == 0 || a % 5 == 0) {
// 		alert("这个数能被6整除但不能被5整除");
// 	} else {
// 		alert("这个数既不能被5整除也不能被6整除");
// 	} 
// 	}else {
// 		alert("请重新输入一个数字")
// 	}

// var a=parseInt(prompt("请输入一个数"));
// var a1=parseInt(prompt("请输入一个数"));
// if (!isNaN(a)&&!isNaN(a1)) {
// 	if (a%2==0&&a1%2==0) {
// 		alert("这两数的奇偶性相同");
// 	} else if(a%2!=0&&a%2!=0){
// 		alert("这两数的奇偶性相同");
// 	}else{
// 		alert("这两个数奇偶性不同")
// 	}
// } else{
// 	alert("请重新输入")
// }

// var a = parseInt(prompt("请输入一个数"));
// if (isNaN(a) == false) {
// 	if (a % 100 == 0) {
// 		if (a % 400 == 0) {
// 			alert(a + "是闰年");
// 		} else {
// 			alert(a + "不是闰年");
// 		}
// 	} else {
// 		if (a % 4 == 0) {
// 			alert(a + "是闰年");
// 		} else {
// 			alert(a + "不是闰年");
// 		}
// 	}
// } else {
// 	alert("请重新输入");
// }

var a = parseInt(prompt("请输入你的工龄"));
var a1 = parseInt(prompt("请输入你的月薪"));
if (!isNaN(a) && !isNaN(a1) && a >= 0 && a1 >= 0) {
	if (a == 0) {
		if (a1 >= 8000) {
			alert("您的年终奖是" + (a1 * 1.2))
		} else {
			alert("您的年终奖是" + (a1));
		}
	} else if (a == 1) {
		if (a1 >= 10000) {
			alert("您的年终奖是" + (a1 * 1.7))
		} else {
			alert("您的年终奖是" + (a1 * 1.5));
		}
	} else if (a >= 2) {
		if (a1 >= 12000) {
			alert("您的年终奖是" + (a1 * 3.2))
		} else {
			alert("您的年终奖是" + (a1 * 3));
		}
	}
}else {
	alert("请重新输入");
}
