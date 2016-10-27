/**
 * Created by xyh on 2016/10/26.
 */

var exec = require('child_process').exec;
var querystring = require("querystring");
//模拟阻塞
function start(response, postData) {
    console.log("Request handler 'start' is called.");
    //用于制造阻塞
    // function sleep(millisecond){
    // 	var startTime = new Date().getTime();
    // 	while(new Date().getTime() < startTime + millisecond);
    // }
    // sleep(10000);

    //"ls -lah"用于找到当前目录下的所有文件
    //find/ 是整个电脑的文件
    exec("find /", { timeout: 10000, maxBuffer: 20000*1024}, function(error, stdout, stderr){
    	response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}
//模拟post请求
function postRequest(response, postData){
	console.log("Request handler 'postRequest' is called.");
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="inputText" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
//post Request
function upload(response, postData) {
    console.log("Request handler 'upload' is called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write( "You've sent:" + querystring.parse(postData).inputText);
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.postRequest = postRequest;