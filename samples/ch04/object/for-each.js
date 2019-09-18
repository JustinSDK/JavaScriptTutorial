function forEach(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

let obj = {
    '0' : 100,
    '1' : 200,
    '2' : 300,
    length : 3,
    forEach : forEach 
};

obj.forEach(function(elem) {
    console.log(elem);
});