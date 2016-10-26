/**
 * Created by xyh on 2016/10/26.
 */
var server = require('./server');
var router = require('./router');
server.start(router.route);