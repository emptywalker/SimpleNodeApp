/**
 * Created by xyh on 2016/10/26.
 */

var exec = require('child_process').exec;
var querystring = require("querystring");
	fs = require("fs");
	formidable = require("formidable");

//下面的所有postData在当前换成了request
//模拟阻塞
function start(response, request) {
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
function postRequest(response, request){
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
function upload(response, request) {
    console.log("Request handler 'upload' is called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write( "You've sent:" + querystring.parse(request.data).inputText);
    response.end();
}

//选择图片
function selectFile(response, request) {
	console.log("'selectFile' was called.");
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/uploadFile" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="uploadFile">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>'; 
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
//上传图片
function uploadFile(response, request) {
	console.log("'uploadFile' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse" );
	form.parse(request, function (error, fileds, files) {
		console.log("parsing done.     " + files.uplod);
		console.log("  files.uplod  " + files.uplod);
		console.log("  files.uploadFile  " + files.uploadFile);
		fs.renameSync(files.uploadFile.path, "/tmp/test.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}
//展现图片
function show(response, request) {
	console.log("Request handler 'show' was called.");
	fs.readFile("/tmp/test.png", "binary", function (error, file) {
		if (error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		}else{
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	})
}

exports.start = start;
exports.upload = upload;
exports.postRequest = postRequest;
exports.selectFile = selectFile;
exports.uploadFile = uploadFile;
exports.show = show;