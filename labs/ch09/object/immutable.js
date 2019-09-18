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

    // 實作範例
}

let lt = new ImmutableList(1, 2, 3);
// 顯示 [object ImmutableList]
console.log(Object.prototype.toString.call(lt));