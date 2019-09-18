let arrayLike = {
    '0': 10,
    '1': 20,
    '2': 30,
    length: 3,
    *[Symbol.iterator]() { 
        for(let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
};

for(let n of arrayLike) {
    console.log(n);
}

let [a, b, c] = arrayLike;
console.log(a, b, c);