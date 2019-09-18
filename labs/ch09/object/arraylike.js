class ArrayLike {
    constructor() {
        Object.defineProperty(this, 'length', {
            value: 0,
            writable: true
        });        
    }
    
    // 實作範例
}

console.log((new ArrayLike()) instanceof ArrayLike);
console.log({length: 0} instanceof ArrayLike);
console.log([] instanceof ArrayLike);