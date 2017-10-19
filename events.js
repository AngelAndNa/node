const events=require("events");//系统模块名称大小写敏感，需要小写
// console.log(events);
//events模块只提供了一个对象：EventEmitter;

class LitterDog extends events{
    eat(v){
        console.log(`the litter dog is eating ${v}`);
    }
    play(){
        console.log("play football")
    }
    kikeball(){
        console.log("the litter dog is kiking ball ");
    }
}
//on绑定一个事件，emit触发一个事件
var litterdog= new LitterDog();
//on：监听一个指定的事件，当这个事件被emit，回调被执行
litterdog.on("dangdang",function(v){
    litterdog.eat(v);
    litterdog.play();
})
//只绑定或者监听一次指定的事件
litterdog.once("kike",function(){
    litterdog.kikeball();
})
litterdog.emit("dangdang","bone");
litterdog.emit("kike");