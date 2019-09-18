function Account(name, number, balance) {
    Object.defineProperties(this, {
        name: {
            get: () => name
        },
        number: {
            get: () => number
        },
        balance: {
            get: () => balance
        }
    });
    
    this.withdraw = function(money) {
        if(money > balance) {
            console.log('餘額不足');
        }
        balance -= money;
    };

    this.toString = () => `(${this.name}, ${this.number}, ${this.balance})`;
}

let acct1 = new Account('Justin Lin', '123-4567', 1000);

acct1.withdraw(500);
console.log(acct1.balance);
acct1.withdraw(1000);