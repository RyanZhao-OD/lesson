/**
 *         n                       (n <= 2)
 * f(n) =  f(n - 1) + f(n - 2)     (n > 2)
 *
 */
const fibonacci = function _fibonacci(n) {
    if (n <= 2) {
        return n;
    }
    return _fibonacci(n - 1) + _fibonacci(n - 2);
};

const fibonacci1 = (() => {
    const cache = [0, 1, 2];
    return function _fibonacci(n) {
        if (!!cache[n]) {
            return cache[n];
        }
        cache[n] = _fibonacci(n - 1) + _fibonacci(n - 2);
        return cache[n];
    };
})();

console.log(fibonacci(5));
console.log(fibonacci1(5));
