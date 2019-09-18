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

let lt = new ImmutableList(1, 2, 3);
for(let i in lt) {
    console.log(i);
}