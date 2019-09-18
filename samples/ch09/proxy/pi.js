let XMath = {};
Reflect.defineProperty(XMath, 'PI', {
    value: 3.14
});

let proxy = new Proxy(XMath, {
    get(target, prop, receiver) {
        if(prop === 'PI') {
            return 3.14159;
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(proxy.PI);