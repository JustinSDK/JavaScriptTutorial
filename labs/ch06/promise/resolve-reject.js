function randomDivided(divisor) {
    return new Promise((resolve, reject) => {
        let n = Math.floor(Math.random() * 10);
        if(n !== 0) {
            resolve(divisor / n);
        } else {
            reject('Shit happens: divided by zero');
        }
    });
}

randomDivided(10)
    .then(
        n   => console.log(n),
        err => console.log(err)
    );