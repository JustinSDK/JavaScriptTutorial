class AroundMethodInterceptor {
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

class BeforeMethodInterceptor extends AroundMethodInterceptor {
    constructor(before) {
        super(function(target, method, args, receiver) {
            before(target, method, args, receiver);
            return Reflect.apply(method, target, args);
        });      
    }
}

class AfterMethodInterceptor extends AroundMethodInterceptor {
    constructor(after) {
        super(function(target, method, args, receiver) {
            let result = Reflect.apply(method, target, args);
            return after(target, method, args, receiver, result);
        });      
    }
}

const Interceptors = {
    'before': BeforeMethodInterceptor,
    'around': AroundMethodInterceptor,
    'after': AfterMethodInterceptor
};

// 實作內容