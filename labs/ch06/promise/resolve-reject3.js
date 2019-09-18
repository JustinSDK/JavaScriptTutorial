function randomDivided(divisor) {
    let n = Math.floor(Math.random() * 10);
    if(n !== 0) {
        return Promise.resolve(divisor / n);
    } else {
        return Promise.reject('Shit happens: divided by zero');
    }
}

function allSettled(promises) {
    // 實作內容
}

allSettled([randomDivided(10), randomDivided(20), randomDivided(30)])
    .then(statusObjs => statusObjs.filter(obj => obj.status === 'fulfilled'))
    .then(results => results.map(result => result.value))
    .then(console.log);
