let fs = [];
for(let i = 0; i < 10; i++) {
    fs[i] = function() {
        return i;
    };
}

console.log(fs[0]());  
console.log(fs[1]()); 