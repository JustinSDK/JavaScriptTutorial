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

// 實作內容

let lt = new ImmutableList(1, 2, 3);
for(let elem of lt) {
    console.log(elem);
}