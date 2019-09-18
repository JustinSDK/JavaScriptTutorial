function lengGreaterThan(num) {
    function lengGreaterThanNum(elem) {
        return elem.length > num;
    }
    return lengGreaterThanNum;
}

function length(elem) {
    return elem.length;
}

function toUpperCase(elem) {
    return elem.toUpperCase();
}

let arr = ['Justin', 'caterpillar', 'openhome'];
console.log(arr.filter(lengGreaterThan(6)));
console.log(arr.map(length));

console.log(
    arr.filter(lengGreaterThan(6))
       .map(toUpperCase)
);