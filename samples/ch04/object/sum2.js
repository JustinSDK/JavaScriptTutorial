function sum([head, ...tail]) {
    return head ? head + sum(tail) : 0;
}

console.log(sum([1, 2, 3, 4, 5])); // 顯示 15