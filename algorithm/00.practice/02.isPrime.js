// 2, 3, 5, 7, 13, 17, 19...
const isPrime = num => {
    // 2、3是质数 小于2 不是质数
    if (num <= 3) {
        return num > 1;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const isPrime1 = num => {
    // 2、3是质数 小于2 不是质数
    if (num <= 3) {
        return num > 1;
    }

    // 一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于sqrt(n)，一个大于等于sqrt(n)
    for (let i = 2, temp = Math.sqrt(num); i <= temp; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime1(5));



// 大于等于5的质数一定和6的倍数相邻。例如5和7，11和13,17和19等等；
const isPrime2 = num => {
    // 2、3是质数 小于2 不是质数
    if (num <= 3) {
        return num > 1;
    }
    // 不在6的倍数的旁边 一定不是质数
    if ((num + 1) % 6 !== 0 && (num - 1) % 6 !== 0) {
        return false;
    }

    // 一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于sqrt(n)，一个大于等于sqrt(n)
    for (let i = 2, temp = Math.sqrt(num); i <= temp; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    // 其他情况 都是质数
    return true;
};
