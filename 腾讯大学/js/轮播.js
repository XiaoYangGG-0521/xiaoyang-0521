// 首先我先获取各个节点， 通过类名， ID等方法：

var oBody = document.getElementsByTagName("body")[0];
var aBanner = document.getElementsByClassName("banner");
var aSpan = document.getElementsByClassName("tab")[0].getElementsByTagName("span");
var oNext = document.getElementsByClassName("next")[0];
var Oprev = document.getElementsByClassName("prev")[0];
var Oon = document.getElementsByClassName("on")[0];
// 接下来是初始化界面， 因为我在css里面设置了图片的不透明度opacity: 0;
// 所以我在实现轮播图前先使得第一张图片显示和第一个小圆点颜色为白色：
// 
aBanner[0].style.opacity = "1";
aSpan[0].className = "on";
var num = 0;
// 然后就是设置前一张， 后一张， 小圆点的按钮效果了， 实现点击小圆点， 会使相对应的图片显示， 点击前一张， 会使前一张图片显示； 后一张效果一样：

for (var i = 0; i < aSpan.length; i++) {
	aSpan[i].index = i;
	aSpan[i].onclick = function() { //点击小圆点图片相对应的进行切换
		for (var j = 0; j < aSpan.length; j++) {
			num = this.index;
			aSpan[j].className = "";
			aBanner[j].style.opacity = "0";
		}
		aSpan[num].className = "on";
		aBanner[num].style.opacity = "1";
	}
	oNext.onclick = function() { //按下图片切换到后一张
		for (var j = 0; j < aSpan.length; j++) {
			if (aSpan[j].className == "on") {
				aSpan[j].className = "";
				aBanner[j].style.opacity = "0";
				j++;
				num++;
				if (j > 4) {
					j = 0;
				}
				aSpan[j].className = "on";
				aBanner[j].style.opacity = "1";

			}
		}
	}

	Oprev.onclick = function() { //按下图片切换到前一张
		for (var j = 0; j < aSpan.length; j++) {
			if (aSpan[j].className == "on") {
				aSpan[j].className = "";
				aBanner[j].style.opacity = "0";
				j--;
				num--;
				if (j < 0) {
					j = 4;
				}
				aSpan[j].className = "on";
				aBanner[j].style.opacity = "1";

			}
		}
	}
}
// 在这部分给一个for循环， length为小圆点的个数， 在这个循环中， 先给每个圆点的下标值赋值， 使得每个圆点对应一张图片；
// 然后编写点击圆点的函数， 在函数中实现当前圆点的时候， 获取当前的下标值， 讲该值赋给全局变量num， 将所以图片的opacity设置为o， 去掉所有圆点的 "on"
// 样式， 然后将第num张图片的opacity设置为1， 添加 "on"
// 样式， 这样就实现了点击圆点跳转到相应的图片。
// 同样的就可以实现向前向后按钮效果。
// 最后设置一个定时器的函数， 实现图片轮播：

function Time() { /*设置定时器运行的函数*/
	num++;
	if (num < 3) {
		for (var j = 0; j < aSpan.length; j++) {
			aSpan[j].className = "";
			aBanner[j].style.opacity = "0";
		}
		aSpan[num].className = "on";
		aBanner[num].style.opacity = "1";
	} else {
		num = -1;
	}
}
clearInterval(timer);
var timer = setInterval("Time()", 2000); /*调用定时器*/

oBody.onmouseover = function() { /*鼠标引入，清除定时器，轮播图停止*/
	clearInterval(timer);
};
oBody.onmouseout = function() { /*鼠标移出，重新调用定时器，轮播图开始*/
	clearInterval(timer);
	timer = setInterval("Time()", 2000);
};
// 在调用定时器的时候， 我用的使setInterval， 或者你要使用setTimerout也是可以的；
// 
// 在调用定时器要先清除定时器， 不然会让定时器一直叠加， 使得轮播速度越来越快； 我还加了当鼠标移入的时候， 轮播图停止， 即定时器被清除了， 当鼠标移出的时候， 定时器又重新被调用。
// 