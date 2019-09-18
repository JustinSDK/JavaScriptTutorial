class ArrayLike {
    constructor() {
        Object.defineProperty(this, 'length', {
            value: 0,
            writable: true
        });        
    }
    
    static [Symbol.hasInstance](instance) {
        return 'length' in instance;
    }
}

console.log((new ArrayLike()) instanceof ArrayLike);
console.log({length: 0} instanceof ArrayLike);
console.log([] instanceof ArrayLike);