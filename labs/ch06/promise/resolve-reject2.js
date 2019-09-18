function randomDivided(divisor) {
    let n = Math.floor(Math.random() * 10);
    if(n !== 0) {
        return Promise.resolve(divisor / n);
    } else {
        return Promise.reject('Shit happens: divided by zero');
    }
}

randomDivided(10)
    .then(
        n   => console.log(n),
        err => console.log(err)
    );

