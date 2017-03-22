<h1>内存释放</h1>

Garbage Collection 垃圾回收

V8 遇到内存空间不足会进行3此次C

	V8 在分配内存失败后，会先尝试一次 GC 后再分配，如果还是失败，再尝试一次 GC 和分配。这两次 GC 的触发原因在日志里叫做 allocation failure。如果第二次 GC 后依然无法分配出足够的内存，V8 会进行一次更彻底的 GC，在回收弱引用的时候（弱引用的对象不介意何时被 GC 回收，在计算可达性的时候弱引用不算可达），强制触发相关的 GC 回调，这次 GC 的触发原因在日志里叫做 last resort gc。如果这次 GC 后依然分配失败，V8 将会由于进程内存用尽（process out of memory）退出。




内存中到底发生了什么？

栈：
function add (a, b) {  
  return a + b
}
add(4, 5)

堆：
function Car (opts) {  
  this.name = opts.name
}
const LightningMcQueen = new Car({name: 'Lightning McQueen'})

## 构成
代码itself
stack
heap


Scavenge collection, which is fast and runs on the Young Generation,

Mark-Sweep collection, which is slower and runs on the Old Generation.

