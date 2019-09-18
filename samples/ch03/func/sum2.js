function sum() {
    var sum = 0;    
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2));;      // 顯示 3
console.log(sum(1, 2, 3));    // 顯示 6
console.log(sum(1, 2, 3, 4)); // 顯示 10