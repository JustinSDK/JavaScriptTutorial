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

    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }

    static get [Symbol.species]() {
        return this;
    }

    slice(begin, end) {
        let sliced = Array.from(this).slice(begin, end);
        return new this.constructor[Symbol.species](...sliced);
    }
}

class SubImmutableList1 extends ImmutableList {
}

class SubImmutableList2 extends ImmutableList {
    static get [Symbol.species]() {
        return ImmutableList;
    }
}

let lt1 = new SubImmutableList1(1, 2, 3);
let lt2 = new SubImmutableList2(1, 2, 3);

// 顯示 SubImmutableList1 { '0': 2, '1': 3 }
console.log(lt1.slice(1));
// 顯示 ImmutableList { '0': 2, '1': 3 }
console.log(lt2.slice(1));