/**
 * Created by xyh on 2016/10/26.
 */
var http = require('http');



function start() {
    function onRequest(request, response) {
        console.log("request received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('server started log');
}

exports.start = start;