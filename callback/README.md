#本篇是看看怎么解决地域回调的

## 为什么有地域回调？

> var fun = function(arr, callback) {
    // async function
    var data = 'async result';
    callback(data);
}

> fun('param', function(arg) {
    console.log(arg);
})

# 于是万恶的地域回调开始了  >.<


# 地域回调对try catch的影响

## 因为try catch在异步中会导致异步调用的错误是没法throw的
## 解决方法： 1. callback error优先。  2. eventEmitter