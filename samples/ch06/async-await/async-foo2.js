function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

(async function() {
    let r1 = await asyncFoo(10);
    let r2 = await asyncFoo(r1);
    let r3 = await asyncFoo(r2);
    console.log(r3);
})(); 