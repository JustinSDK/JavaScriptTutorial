function sum(numbers) {
    let [head, ...tail] = numbers;
    if(head) {
        return head + sum(tail);
    } else {
        return 0;
    }
}

console.log(sum([1, 2, 3, 4, 5])); // 顯示 15