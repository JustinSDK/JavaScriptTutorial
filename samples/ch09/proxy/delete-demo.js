let proxy = new Proxy([], {
    deleteProperty(target, prop) {
        Reflect.deleteProperty(target, prop);
        return true;
    }
});

Reflect.deleteProperty(proxy, '0');
Reflect.deleteProperty(proxy, 'length');