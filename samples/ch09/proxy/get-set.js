let array = [1, 2, 3];

let proxy = new Proxy(array, {
    get(target, prop, receiver) {
        console.log('get on', target, prop);
        return Reflect.get(target, prop, receiver);
    },

    set(target, prop, value, receiver) {
        console.log('set on', target, prop, value);
        return Reflect.set(target, prop, value, receiver);
    }
});

proxy[0];
console.log();

proxy[1] = 20;
console.log();

proxy.push(1);
console.log();
