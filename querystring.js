const queryString = require("querystring");
var formdatas="name=zhang&age=23&password=123";

//把queryString转成对象的方式
console.log(queryString.parse(formdatas));

var formdata="name=zhang$age=23$password=123";
console.log(queryString.parse(formdata,"$"));