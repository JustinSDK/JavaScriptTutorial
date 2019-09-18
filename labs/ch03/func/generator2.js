function* range(start, end) {
    for(let i = start; i < end; i++) {
        yield i;
    }
}

function* np_range(n) {
    yield* range(0 - n, 0);
    yield* range(1, n + 1);
}

for(let i of np_range(3)) {
    console.log(i);
}