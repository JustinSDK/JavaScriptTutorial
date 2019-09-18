function filter(arr, predicate) {
    let result = [];
    for(let elem of arr) {
        if(predicate(elem)) {
            result.push(elem);
        }
    }
    return result;
}

// 實作 lengGreaterThan 函式

let arr = ['Justin', 'caterpillar', 'openhome'];
console.log('大於 5：', filter(arr, lengGreaterThan(5)));
console.log('大於 7：', filter(arr, lengGreaterThan(7)));