function ImmutableList(...elems) {
    elems.forEach(function(elem, idx)  {
        Object.defineProperty(this, idx, {
            value: elem,
            enumerable: true
        });
    }, this);

    Object.defineProperty(this, 'length', {
        value: elems.length
    });

    Object.preventExtensions(this);
}

Object.defineProperty(ImmutableList.prototype, Symbol.iterator, {
    value: function*() {
        for(let i = 0; i < this.length; i++) {
            yield this[i];
        }
    },
    writable: true,
    configurable: true  
});

let lt = new ImmutableList(1, 2, 3);
for(let elem of lt) {
    console.log(elem);
}