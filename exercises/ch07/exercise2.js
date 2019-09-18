function range(start, end) {
    let i = start;
    return {
        [Symbol.asyncIterator]() { 
            return this; 
        },
        async next() {
            return i < end ? 
                   {value: i++, done: false} :
                   {value: undefined, done: true};
        },
        async return(value) {
            i = end; 
            return {value, done: true};
        },
        async throw(e) {
            if(i === start || i === end) {
                throw e;
            }
            i = end;
            console.log(e.message);
            return {value: undefined, done: true};
        }
    };
}

let g = range(1, 10);
g.next().then(result => console.log(result.value));
g.throw(new Error('Shit happens'));