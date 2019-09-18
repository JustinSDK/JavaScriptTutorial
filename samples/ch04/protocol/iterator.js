function range(start, end) {
    let i = start;
    return {
        [Symbol.iterator]() { 
            return this; 
        },
        next() {
            if(i < end) {
                return {value: i++, done: false};
            }
            return {value: undefined, done: true};
        }
    };
}

for(let n of range(3, 8)) {
    console.log(n);
}