var Readable = require('stream').Readable;
var rs = Readable();

var c = 97 - 1;

rs._read = function () {
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);

    setTimeout(function () {
        rs.push(String.fromCharCode(++c));
    }, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);

// 运行上面的代码我们可以发现如果我们只请求5比特的数据，那么_read只会运行5次：

// 另外,process.stdout.on('error',fn)处理器也很重要，因为当head不再关心我们的程序输出时，操作系统将会向我们的进程发送一个SIGPIPE信号，此时process.stdout将会捕获到一个EPIPE错误。
