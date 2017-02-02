/*
	个人理解： EventEmitter的on事件返回的其实是自身EventEmitter。
*/
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var fs = require('fs');

function Handler(filename, url) {
    EventEmitter.call(this);
    this.filename = filename;
    this.url = url;
}
Handler.prototype = _.create(EventEmitter.prototype, _.assign({
  'constructor': Handler
}));
Handler.prototype.start = function() {
	console.log(123);
    fs.readFile(this.filename, 'utf8', delegate(this, 'onFileData'));
};

Handler.prototype.onFileData = function(err, res) {
    if (err) {
        this.emit('abort', err);
        return;
    }
    data = {};
    try {
        data = JSON.parse(res);
    } catch (ex) {
        this.emit('abort', ex);
        return;
    }

    setTimeout(delegate(this, 'onHttpResp'), 1000);
};

Handler.prototype.onHttpResp = function(err, httpResponse, body) {
    if (err) {
        this.emit('abort', err);
    } else {
        this.emit('done', body);
    }
};

function delegate(agent, fn) {
	return function() {
		return agent[fn].apply(agent, arguments);
	}
}

new Handler('conf.json', 'a.com/upload').on('done', function(body) {
	console.log('文件读取数据', body);
}).on('abort', function(err) {
    // Failed
}).start();
