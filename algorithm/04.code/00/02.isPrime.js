// 输入n，判断是否质数
// n = 1 * n

// O(n)
const isPrime = n => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

/**
 * @param n 如果不是质数 n = a * b    Math.sqrt(n)
 * @returns {boolean}
 */

const isPrime2 = n => {
    let sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};






const isPrime3 = n => {
    if (n <= 3) {
        return n > 1;
    }
    // 如果不在6的倍数旁边 一定不是质数
    if ((n - 1) % 6 !== 0 && (n + 1) % 6 !== 0) {
        return false;
    }
    let sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

for (let i = 0; i < 100; i++) {
    isPrime3(i) && console.log(i);
}