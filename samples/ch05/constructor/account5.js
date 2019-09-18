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
            enumerable: true
        },
        withdraw: {
            value: function(money) {
                if(money > balance) {
                    console.log('餘額不足');
                }
                balance -= money;
            }
        },
        toString: {
            value: () => `(${this.name}, ${this.number}, ${this.balance})`
        }
    });
}

let acct = new Account('Justin Lin', '123-4567', 1000);
for(let p in acct) {
    console.log(`${p}: ${acct[p]}`);
}