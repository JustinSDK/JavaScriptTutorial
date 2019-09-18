function foo(flag) {
    try {
        if(flag) {
            return 1;
        }
    } finally {
        console.log('finally run it');
    }
    return 0;
}

console.log(foo(true));
console.log(foo(false));