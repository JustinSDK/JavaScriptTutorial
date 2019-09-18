class Account {
    constructor(name, number, balance) {
        Object.defineProperties(this, {
            __name__: {
                value: name,
                writable: true
            },
            __number__: {
                value: number,
                writable: true
            },
            __balance__: {
                value: balance,
                writable: true
            },
        });
    }

    get name() {
        return this.__name__;
    }
    
    get number() {
        return this.__number__;
    }

    get balance() {
        return this.__balance__;
    }

    withdraw(money) {
        if(money > this.__balance__) {
            console.log('餘額不足');
        }
        this.__balance__ -= money;
    }
    
    deposit(money) {
        if(money < 0) {
            console.log('存款金額不得為負');
        }
        else {
            this.__balance__ += money;
        }
    }            

    toString() {
        return `(${this.__name__}, ${this.__number__}, ${this.__balance__})`;
    }
}

Object.defineProperties(Account.prototype, {
    name: {enumerable: true},
    number: {enumerable: true},
    balance: {enumerable: true}
});

let acct = new Account('Justin Lin', '123-4567', 1000);
for(let p in acct) {
    console.log(`${p}: ${acct[p]}`);
}