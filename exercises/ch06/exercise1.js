function toAsync(f) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            try {
                resolve(f.apply(this, args));
            }
            catch(e) {
                reject(e);
            }
        });
    };
}

function toAsync2(f) {
    return async function(...args) {
        return f.apply(this, args);
    };
}

function fib(n) {
    if(n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

let asyncFib = toAsync(fib);
asyncFib(10).then(console.log);

let asyncFib2 = toAsync2(fib);
asyncFib2(10).then(console.log);