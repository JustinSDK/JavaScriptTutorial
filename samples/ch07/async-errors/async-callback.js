function randomDivided(divisor, callback) {
    setTimeout(
        () => {
            let n = Math.floor(Math.random() * 10);
            let err = n === 0 ? new Error('Divided by zero') : undefined;
            callback(err, divisor / n);
        },
        2000
    );
}

randomDivided(10, (err, r) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log(r);
    }
});