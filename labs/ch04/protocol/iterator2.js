function range(start, end) {
    let i = start;
    return {
        [Symbol.iterator]() { 
            return this; 
        },
        next() {
            return i < end ? 
                   {value: i++, done: false} :
                   {value: undefined, done: true};
        },
        return(value) {
            console.log(value);
            i = end;
            return {value, done: true};
        }
    };
}

let r = range(3, 8);
for(let n of r) {
    console.log(n);
    break;
} 
