function* range(start, end) {
    try {
        for(let i = start; i < end; i++) {
            yield i;
        }
    }
    catch(e) {
        console.log(e.message);
    }
}

let g = range(1, 10);
console.log(g.next());
console.log(g.throw(new Error('Shit happens')));