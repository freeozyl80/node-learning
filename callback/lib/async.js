function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};

var start = (() => {
    var _ref = _asyncToGenerator(function* () {
        // 在这里使用起来就像同步代码那样直观
        console.log('start');
        yield sleep(3000);
        console.log('end');
    });

    return function start() {
        return _ref.apply(this, arguments);
    };
})();

start();