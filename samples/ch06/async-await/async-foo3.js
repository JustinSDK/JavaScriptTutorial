function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

async function* asyncFoos(nums) {
    for(let n of nums) {
        yield asyncFoo(n);
    }
}

(async function() {
    for await (let v of asyncFoos([10, 20, 30])) {
        console.log(v);
    }
})();
