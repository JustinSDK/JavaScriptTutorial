const NegativeIndexHandler = {
    get(target, prop, receiver) {
        let idx = Number(prop);
        return Reflect.get(
            target,
            Number.isNaN(idx) || idx >= 0 ? prop : String(target.length + idx), 
            receiver
        );
    },

    set(target, prop, value, receiver) {
        let idx = Number(prop);
        return Reflect.set(
            target,
            Number.isNaN(idx) || idx >= 0 ? prop : String(target.length + idx), 
            value,
            receiver
        );
    }
};

let proxy = new Proxy([1, 2, 3], NegativeIndexHandler);
console.log(proxy[-2]);  // 顯示 2
proxy[-2] = 20;
console.log(proxy);      // 顯示 [ 1, 20, 3 ]