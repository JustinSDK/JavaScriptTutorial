let arrayLike = Object.create(Array.prototype, {
    '0': {
        value: 10,
        enumerable: true,
        writable: true,
        configurable: true      
    },
    '1': {
        value : 20,
        enumerable: true,
        writable: true,
        configurable: true      
    },
    length: {
        value: 2,
        writable: true      
    }
});

arrayLike.forEach(elem => console.log(elem)); // 顯示 10、20
console.log(arrayLike instanceof Array);      // 顯示 true
