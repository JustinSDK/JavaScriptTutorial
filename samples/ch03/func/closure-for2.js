function foo(i) {
    return function() {
        return i;
    };
}

var fs = [];
for(var i = 0; i < 10; i++) {
    fs[i] = foo(i);
}

console.log(fs[0]());  
console.log(fs[1]()); 