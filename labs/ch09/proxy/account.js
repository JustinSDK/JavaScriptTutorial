class IllegalArgumentError extends Error {
    constructor(message) {
        super(message);
    }

    get name() {
        return IllegalArgumentError.name;
    }
}

class InsufficientException extends Error {
    constructor(message, balance) {
        super(message);
        this.balance = balance;
    }

    get name() {
        return InsufficientException.name;
    }
}

const privates = new WeakMap();

class Account {
    constructor(name, number, balance) {
        privates.set(this, {name, number, balance});
    }

    get name() {
        return privates.get(this).name;
    }
    
    get number() {
        return privates.get(this).number;
    }

    get balance() {
        return privates.get(this).balance;
    }

    withdraw(money) {
        if(money < 0) {
            throw new IllegalArgumentError('提款金額不得為負');
        }  

        let acct = privates.get(this);
        if(money > acct.balance) {
            throw new InsufficientException('餘額不足', acct.balance);
        }
        acct.balance -= money;
    }

    deposit(money) {
        if(money < 0) {
            throw new IllegalArgumentError('存款金額不得為負');
        }  

        let acct = privates.get(this);
        acct.balance += money;
    }        

    toString() {
        let acct = privates.get(this);
        return `(${acct.name}, ${acct.number}, ${acct.balance})`;
    }
}

let acct = new Account('Justin Lin', '123-4567', 1000);
let proxy = new Proxy(acct, {});
proxy.deposit(1000);
