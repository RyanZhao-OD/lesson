const fibonacci = function _fibonacci(n) {
    if (n <= 2) {
        return n;
    }
    return _fibonacci(n - 1) + _fibonacci(n - 2);
};

console.log(fibonacci(3));

const fibonacci2 = (() => {
    const cache = [0, 1, 2];
    return function _fibonacci(n) {
        if (!!cache[n]) {
            return cache[n];
        }
        cache[n] = _fibonacci(n - 1) + _fibonacci(n - 2);
        return cache[n];
    };
})();

console.log(fibonacci2(3));
