function randomDivided(divisor, callback) {
    setTimeout(
        () => {
            let n = Math.floor(Math.random() * 10);
            if(n === 0) {
                throw new Error('Divided by zero');
            }
            callback(divisor / n);
        },
        1
    );
}

try {
    randomDivided(10, console.log);
}
catch(e) {
    console.log(e.message);
}