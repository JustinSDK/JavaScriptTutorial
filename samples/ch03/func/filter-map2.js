let arr = ['Justin', 'caterpillar', 'openhome'];

let lengs = arr.map(function(name) {
    return name.length;
});
console.log(lengs);

let uppers = arr.map(function(name) {
    return name.toUpperCase();
});
console.log(uppers);