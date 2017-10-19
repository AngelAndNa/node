
//__dirname用来返回当前模块的路径
console.log(__dirname);
//__filename当前模块的文件名称（解析后的绝对路径）
console.log(__filename);

function test(){
    for(let a of [1,2,3,4,5,6]){
        console.log(a);
    }
}
//测试方法，代码执行需要的时间
console.time("times");
test();
console.timeEnd("times");