async function foo(n) {
    return n;
}

(async function() {
    try {
        let v = await foo(10);
        console.log(v);
        throw new Error('Shit happens');
    }
    catch(err) {
        console.log(err.message);
    }
    finally {
        console.log('finally run it');
    }
})();
