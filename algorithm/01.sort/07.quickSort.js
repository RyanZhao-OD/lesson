const quickSort = arr => {
    if (!arr.length) {
        return [];
    }
    const [pivot, ...rest] = arr;
    return [
        ...quickSort(rest.filter(x => x < pivot)),
        pivot,
        ...quickSort(rest.filter(x => x >= pivot))
    ];
};

console.log(quickSort([4, 9, 7, -4, 10]));
