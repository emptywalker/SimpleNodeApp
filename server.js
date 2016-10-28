/**
 * Created by xyh on 2016/10/26.
 */
var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received");
        
        route(handle, pathname, response, request);

        //采用将request对象传递到handler中  无需一下做法
        //进行 接受post数据 监听
        //var postData = '';
        // request.setEncoding("utf8");
        // request.addListener('data', function (postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '" + postDataChunk + "'.")
        // });
        // request.addListener('end', function () {
        //     route(handle, pathname, response, postData); 
        // });
    }

    http.createServer(onRequest).listen(8888);
    console.log('server started log');
}

exports.start = start;