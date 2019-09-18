// 實作 filter 函式

function lengGreaterThan6(elem) {
    return elem.length > 6;
}
    
function lengLessThan5(elem) {
    return elem.length < 5;
}

function hasi(elem) {
    return elem.includes('i');
}

let arr = ['Justin', 'caterpillar', 'openhome'];
console.log('大於 6：', filter(arr, lengGreaterThan6));
console.log('小於 5：', filter(arr, lengLessThan5));
console.log('有個 i：', filter(arr, hasi));
