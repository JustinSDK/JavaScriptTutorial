class ImmutableList {
    constructor(...elems) {
        elems.forEach((elem, idx) => {
            Object.defineProperty(this, idx, {
                value: elem,
                enumerable: true
            });
        });
    
        Object.defineProperty(this, 'length', {
            value: elems.length
        });
    
        Object.preventExtensions(this);
    }

    *[Symbol.iterator]() {
        for(let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
}

let lt = new ImmutableList(1, 2, 3);
// 顯示 0 到 2
for(let elem of lt) {
    console.log(elem);
}
