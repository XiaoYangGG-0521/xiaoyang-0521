function jiecheng(a) {
    var sum = 1;
    for (var b = 1; b <= a; b++) {
        sum = sum * b;
    }
    return sum;
}
// 1.
// var sum = 0;
// for (var a = 1; a <= 10; a++) {
//     sum += jiecheng(a);
// }
// console.log(sum);

// 2.
// for(var a=100;a<=999;a++){
//     var ge=a%10;
//     var shi=(a-ge)/10%10;
//     var bai=parseInt(a/100);
//     if(jiecheng(ge)+jiecheng(shi)+jiecheng(bai)==a){
//         console.log(a);
//     }
// }

// 3.	
function rev(a) {
    var b = 0;	//每次调用这个函数的时候，b要重置为0
    while (a) {
        //a=152
        b = b * 10 + a % 10;		//b自己乘以10然后加上a的末位数字	
        //  0*10=0 + 152%10=2=b
            //   0 + 15%10=5=b
            //   0 + 1%10=1=b
        a = parseInt(a / 10);		//a自己变短一位数，去掉末位
    // 15
    // 1
    //0.0
    }
    return b;
    //2
    //5
    //1
}

var a=parseInt(prompt("请输入一个数位上没有数字0的整数"));
console.log(rev(a));





// 4.
function qinmi(a, b) {
    var sum = 0;
    // var sum1=0;
    for (var i = 1; i < a; i++) {
        if (a % i == 0) {
            sum += i;
        }
    }
    // for(var c=1;c<b;c++){
    //     if(b%c==0){
    //         sum1+=c;
    //     }
    // }
    // if(sum==b&&sum1==a){
    //     console.log(a+"跟"+b+"是亲密数");
    // }else{
    //     console.log("不是亲秘书");
    // }
    return sum;
}
for (var i = 1; i <= 3000; i++) {
    var j = qinmi(i);
    if (i == qinmi(j) && i != j) {
        console.log(i + "跟" + j + "是亲密数");
    }
}
