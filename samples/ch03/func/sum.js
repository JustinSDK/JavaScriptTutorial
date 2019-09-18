function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2))        // 顯示 3
console.log(sum(1, 2, 3))     // 顯示 6
console.log(sum(1, 2, 3, 4))  // 顯示 10
