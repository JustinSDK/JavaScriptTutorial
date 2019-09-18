class MethodInterceptor {
    constructor(intercepter) {
        this.intercepter = intercepter;
    }

    get(target, prop, receiver) {
        let propValue = Reflect.get(target, prop, receiver);
        if(propValue instanceof Function) {
            return (...args) => this.intercepter(target, propValue, args, receiver);
        }
        return propValue;
    }
}

let proxy = new Proxy([1, 2, 3], new MethodInterceptor(
    function(target, method, args, receiver) {
        console.log('Target:', target);
        console.log('Method:', method);
        console.log('Arguments:', args);
        console.log('Receiver:', receiver);
        return Reflect.apply(method, target, args);
    }
));

console.log(proxy.push(4, 5, 6));