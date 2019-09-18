function map(arr, mapper) {
    let result = [];
    for(let elem of arr) {
        result.push(mapper(elem));
    }
    return result;
}

function toUpperCase(elem) {
    return elem.toUpperCase();
}

function length(elem) {
    return elem.length;
}

let arr = ['Justin', 'caterpillar', 'openhome'];
console.log(map(arr, toUpperCase));
console.log(map(arr, length));
