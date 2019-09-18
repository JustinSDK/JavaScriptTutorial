let array = [1, 2, 3];

let revocable = Proxy.revocable(array, {
    get(target, prop, receiver) {
        console.log('get on', target, prop);
        return Reflect.get(target, prop, receiver);
    },

    set(target, prop, value, receiver) {
        console.log('set on', target, prop, value);
        return Reflect.set(target, prop, value, receiver);
    }
});

let proxy = revocable.proxy;

proxy[0];
console.log();

proxy[1] = 20;
console.log();

proxy.push(1);
console.log();

revocable.revoke();
proxy.push(2);
console.log();
