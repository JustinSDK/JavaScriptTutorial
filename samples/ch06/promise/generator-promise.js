function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

function async(g) {
    let generator = g();

    function consume(result) {
        if(result.done) {
            return;
        }
        let promise = result.value;
        promise.then(r => consume(generator.next(r)));
    }
    consume(generator.next());
}

async(function*() {
    let r1 = yield asyncFoo(10);
    let r2 = yield asyncFoo(r1);
    let r3 = yield asyncFoo(r2);
    console.log(r3);
});   