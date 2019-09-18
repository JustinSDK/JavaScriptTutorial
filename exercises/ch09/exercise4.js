function rangeClosed(min, max) {
    return new Proxy({}, {
        has(target, prop) {
            let n = Number(prop);
            return n >= min && n <= max;
        }
    });
}

let r = new rangeClosed(10, 100);
console.log(10 in r);    // 顯示 true
console.log(50.5 in r);  // 顯示 true
console.log(100 in r);   // 顯示 true