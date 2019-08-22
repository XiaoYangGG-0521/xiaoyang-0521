		// //随机数
		// var rand = parseInt(Math.random () *(100-1+1))+1;
		// console.log(rand);
		// var max =100;
		// var min =1;
		// do{
		// 	var a = parseInt(prompt("输入一个数"+min+"~"+max));
		// 	if(isNaN(a)){
		// 		alert("请输入一个数")
		// 	}else if(a<rand&&a>min&&a<max){//比炸弹小，下限变成输入的数
		// 		min=a;
		// 		console.log("恭喜您没有踩雷");
		// 	}else if(a>rand&&a>min&&a<max){
		// 		max=a;
		// 		console.log("恭喜您没有踩雷");
		// 	}else if(a==rand){
		// 		alert("踩雷了");
        //         break;
		// 	}else{
		// 		alert("重新输入")
		// 	}
		// }while(true);

		var a=parseInt(Math.random()*(100-1+1))+1;
		document.write(a);
		var max=100;
		var min=1;
		do{
		  var c=parseInt(prompt("请输入一个在"+min+"~"+max+"之间的整数"));
		  if(!isNaN(c)){
			  if(c==a){
				  alert("恭喜你踩雷了");
				  break;
			  }else if(c<a&&c>min&&c<max){
				   min=c;
				   alert("恭喜你没有踩雷");
			  }else if(c>a&&c>min&&c<max){
				max=c;
				alert("恭喜你没有踩雷");
			  }
		  }
		}while(true)