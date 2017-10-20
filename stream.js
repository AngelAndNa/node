const fs = require("fs");

//创建一个只读的流，读取文件到buffer
var readStream=fs.createReadStream("3e/tt.js");
//创建一个只写的流，把buffer中的二进制文件写到目标文件中
var writeStream=fs.createWriteStream("../test/zz.js");
//当readStream开始读取数据时，触发data事件
readStream.on("data",(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})
//当源数据流完之后，触发end事件
readStream.on("end",()=>{
    writeStream.end();
})


















