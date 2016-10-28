/**
 * Created by xyh on 2016/10/26.
 */
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/postRequest"] = requestHandlers.postRequest;
handle["/selectFile"] = requestHandlers.selectFile;
handle["/uploadFile"] = requestHandlers.uploadFile;
handle["/show"] = requestHandlers.show;
server.start(router.route, handle);