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

let arrayLike = Reflect.construct(ArrayLike, [], Array);
arrayLike.push(1, 2, 3)
console.log(arrayLike);

let arrayLike2 = Object.create(Array.prototype);
arrayLike2.push(1, 2, 3)
console.log(arrayLike2);