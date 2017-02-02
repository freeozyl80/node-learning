var cluster = require('cluster');
var path = require('path');
// 这里我的理解是master指派給各个work直接开始执行了。
cluster.setupMaster({
  exec: path.join(__dirname, 'worker.js')
});

cluster.fork();
cluster.fork();

cluster.on('disconnect', function (worker) {
  var w = cluster.fork();
  console.error('[%s] [master:%s] worker:%s disconnect! new worker:%s fork',
    Date(), process.pid, worker.process.pid, w.process.pid);
});

cluster.on('exit', function (worker) {
  console.error('[%s] [master:%s] worker:%s exit!',
    Date(), process.pid, worker.process.pid);
});