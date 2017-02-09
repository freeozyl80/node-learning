var async = require('async');
var fs = require('fs');
// collection
async.concat(['a.txt','b.txt'], function(context, cb) {
	fs.readFile(context,'utf8',cb)
}, function(err, files) {
	console.log(files);
});
// 流程控制
async.auto({
    // this function will just be passed a callback
    readData: async.apply(fs.readFile, 'a.txt', 'utf-8'),
    testData: async.apply(fs.readFile, 'a.txt', 'utf-8'),
    showData: ['readData', 'testData', function(results, cb) {
    	console.log(results);
    	cb('arg');
    }]
}, function(arg) {
	console.log(arg, 'done');
});

//http: ["favicon","compression","static","responseTime","cookieParser","bodyParser","log","ral","views","methodOverride","passport","dispatcher","notFound","error",null]