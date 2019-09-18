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

// 實作範例