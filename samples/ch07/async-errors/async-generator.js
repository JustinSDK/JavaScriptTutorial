async function* foo() {
    try {
        yield 10;
        yield 20;
    }
    catch(e) {
        console.log(e.message);
    }
}
    
let g = foo();
g.next();
g.throw(new Error('Shit happens'));