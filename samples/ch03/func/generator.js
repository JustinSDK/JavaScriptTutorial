function* range(start, end) {
    for(let i = start; i < end; i++) {
        yield i;
    }
}

let g = range(3, 8);
for(let n of g) {
    console.log(n);
}