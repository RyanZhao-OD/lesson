//              1  (n = 1)
//  f(n) =      2  (n = 2)
//            f(n - 1) + f(n - 2)  (n > 3)
// 斐波那契数列
const fibonacci = n => {
    if (n < 3) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci( n - 2);
};

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

// callStack
//                 f(8)
//          f(7)  +   f(6)
//      f(6)+f(5)       f(5)+f(4)

// fibonacci2(50)

const fibonacci2 = (() => {
    // 缓存之前计算过的结果
    // cache[1]
    const cache = [0, 1, 2];
    return function _recur(n) {
        if (cache[n]) {
            return cache[n];
        }
        cache[n] = _recur(n - 1) + _recur(n - 2);
        return cache[n];
    };
})();

console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(4));
console.log(fibonacci2(5));


// n阶楼梯 青蛙 一次只能跳 1阶 2阶
// 实现一个算法，输入n 有几种跳法
/**
 *
 * @param n
 * n = 1   1
 * n = 2   2
 * n > 3   1、先跳1阶 f(n-1)
 *         2、先跳2阶 f(n-2)
 */
const jumpCount = n => {

};
