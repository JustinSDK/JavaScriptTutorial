function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            1000
        );
    });
}

async function foo(n) {
    return asyncFoo(n);
}

foo(10).then(v => console.log(v));