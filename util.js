const util=require("util");//实用的工具方法
const events=require("events");
//util.inherits:原型继承
function Dog(){

}
util.inherits(Dog,events.EventEmitter);

var dog = new Dog();
dog.on("dangdang",function(w){
    console.log(`the dog is eating ${w}`);
})
dog.emit("dangdang","rice");

