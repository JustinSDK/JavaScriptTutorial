class Range {
    // 定義類別 
}

let range = new Range(1, 4);
for(let i of range) {
    console.log(i);            // 顯示 1 2 3
}
console.log(range.toString()); // 顯示 Range(1...3)