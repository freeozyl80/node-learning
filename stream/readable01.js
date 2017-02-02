var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);	//在上面的代码中rs.push(null)的作用是告诉rs输出数据应该结束了。

rs.pipe(process.stdout);