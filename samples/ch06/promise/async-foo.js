function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

asyncFoo(10)
    .then(r1 => asyncFoo(r1))
    .then(r2 => asyncFoo(r2))
    .then(r3 => console.log(r3));