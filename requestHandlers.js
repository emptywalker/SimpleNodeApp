/**
 * Created by xyh on 2016/10/26.
 */
function start() {
    console.log("Request handler 'start' is called.");
}

function upload() {
    console.log("Request handler 'upload' is called.");
}

exports.start = start;
exports.upload = upload;