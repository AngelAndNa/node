const path=require("path");//path为系统模块，不需要加路径

//1.path.normalize：格式化输入的指定路径,返回一个合法的路径
let url="c://a/\\b///c.html";
let resultUrl=path.normalize(url);
console.log(resultUrl);

//2.path.join：对多个输入的指定路径进行连接，并返回合法路径
let url1="c:/";
let url2="b///a\\c.html";
console.log(path.join(url1,url2));
console.log(path.join(url1,url2,".."));

//3.path.resolve：通过路径寻航的方式，返回一个合并的路径
//一级一级的寻址来合并返回路径
console.log(path.resolve("c://a/\\b///c.html"));

//4.path.dirname：输入一个文件，返回当前文件的文件夹的路径
console.log(path.dirname(__filename));//可以接收方法（参数）
console.log(__dirname);//仅仅是文件路径，不能传参

//5.path.basename:接收一个路径，返回指定路径的文件名（包括扩展名）
console.log(path.basename(__filename));
console.log(path.basename(__filename,".js"));//去掉扩展名

//6.path.extname接收一个路径，返回指定路径的文件扩展名
console.log(path.extname(__filename));

//7.path.parse:把一个指定路径字符串转换成一个路径对象
console.log(path.parse(__filename));

