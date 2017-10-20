const fs = require("fs");
var path=require("path");
//1.对文件目录的操作：添加，删除，修改，查看目录下面的文件
//1.1判断指定的目录是否存在
//异步查看
/*
var paths=path.join(__dirname,"/events.js");
console.log(paths);
fs.exists(paths,(exist)=>{
    console.log(exist);
})
//同步查看
console.log(fs.existsSync(paths));
*/
//1.2创建指定名称的目录
/*
fs.mkdir("test/t2",(error)=>{
    console.log(error);
})
console.log(fs.mkdirSync("test1/t3"));
*/
//1.3查看指定目录下的所有目录结构
/*
fs.readdir(__dirname,(error,files)=>{
    console.log(files);
})
console.log(fs.readdirSync(__dirname));
*/
//1.4删除目录
/*
fs.rmdir("test",(error)=>{
    console.log(error);
})
console.log(fs.rmdirSync("test1/t3"));
*/
//1.5修改指定的目录名称
/*
fs.rename("test1","test",(error)=>{
    console.log(error);
})
console.log(fs.renameSync("es6","3e"));
*/

//对文件的操作：添加，删除，修改，追加内容，查看文件内容
//2.1创建一个指定文件名的文件
/*
fs.writeFile("aa/a.js","this is a JS 文件","utf-8",(error)=>{
    console.log(error);
})
console.log(fs.writeFileSync("aa/b.js","this is also a JS 文件","utf-8"));
*/
//2.2读取指定文件中的文件数据
/*
fs.readFile("aa/a.js","utf-8",(error,data)=>{
    console.log(data);
})
console.log(fs.readFileSync("aa/b.js","utf-8"));
*/
//一次性读取到内存中
/*
fs.readFile("aa/a.js",(error,data)=>{
    fs.writeFile("../test/c.js","这是复制过来的","utf-8",(error)=>{
        console.log(error);
    })
})
*/
//2.3对指定的文件进行内容追加
/*
fs.appendFile("aa/a.js","巴拉巴拉","utf-8",(error)=>{
    console.log(error);
})
*/
//2.4修改指定的文件的文件名
/*
fs.rename("../test/c.js","../test/qq.js",(error)=>{
    console.log(error);
})
*/
//2.5查看文件的属性信息
/*
fs.stat("global.js",(error,stats)=>{
    console.log(stats.isFile());
})
*/
//2.6删除指定文件
/*
fs.unlink("3e/dd.js",(error)=>{
    console.log(error);
})
*/
//查看__dirname下的所有文件名

function getFiles(dir,cb){
    fs.readdirSync(dir).forEach((file)=>{
        var pathname=path.join(dir,file);
        // console.log(pathname);
        if(fs.statSync(pathname).isDirectory()){
            getFiles(pathname,cb)
        }else{
            cb(pathname);
        }
    })
}
getFiles(__dirname,(file)=>{
    console.log(file);
})
