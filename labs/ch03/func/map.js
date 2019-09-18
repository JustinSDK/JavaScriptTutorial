// 實作 map 函式

function toUpperCase(elem) {
    return elem.toUpperCase();
}

function length(elem) {
    return elem.length;
}

let arr = ['Justin', 'caterpillar', 'openhome'];
console.log(map(arr, toUpperCase));
console.log(map(arr, length));
