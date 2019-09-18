let KeyRetriever = {
    ownSymbols(obj) {
        return Object.getOwnPropertySymbols(obj);
    },
    ownNonSymbols(obj) {
        return Object.getOwnPropertyNames(obj);
    },
    ownEnumerables(obj) {
        return Reflect.ownKeys(obj).filter(key => key.propertyIsEnumerable());
    },
    ownNonEnumerables(obj) {
        return Reflect.ownKeys(obj).filter(key => !key.propertyIsEnumerable());
    },
    ownKeys(obj, predicate = key => true) {
        return Reflect.ownKeys(obj).filter(predicate);
    },
    allKeys(obj, predicate = key => true) {
        let all = [];
        let current = obj;
        do {
            let currentKeys = Reflect.ownKeys(current).filter(key => !all.includes(key) && predicate(key));
            Array.prototype.push.apply(all, currentKeys);
        } 
        while(current = Reflect.getPrototypeOf(current));
        return all;
    }
};

// 取得 Array.prototype 本身的 Symbol 本性
console.log(
    KeyRetriever.ownKeys(Array.prototype, key => typeof key === 'symbol')
);

// 取得實例本身與繼承而來的特性
console.log(KeyRetriever.allKeys(Array.prototype));