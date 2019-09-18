function Account(name, number, balance) {
    Object.defineProperties(this, {
        name: {
            get: () => name,
            enumerable: true
        },
        number: {
            get: () => number,
            enumerable: true
        },
        balance: {
            get: () => balance,
            set: value => balance = value,
            enumerable: true
        }
    });
}

Object.defineProperty(Account.prototype, 'withdraw', {
    value: function(money) {
        if(money > this.balance) {
            console.log('餘額不足');
        }
        this.balance -= money;
    },
    writable: true,
    configurable: true
});

Object.defineProperty(Account.prototype, 'toString', {
    value: function() {
        return `(${this.name}, ${this.number}, ${this.balance})`;
    },
    writable: true,
    configurable: true        
});

let acct = new Account('Justin Lin', '123-4567', 1000);
for(let p in acct) {
    console.log(`${p}: ${acct[p]}`);
}