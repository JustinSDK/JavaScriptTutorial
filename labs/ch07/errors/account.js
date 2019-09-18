class Account {
    constructor(name, number, balance) {
        this.name = name;
        this.number = number;
        this.balance = balance;
    }

    withdraw(money) {
        if(money > this.balance) {
            console.log('餘額不足');
        }
        this.balance -= money;
    }

    deposit(money) {
        if(money < 0) {
            console.log('餘額不足');
        }
        this.balance += money;
    }    

    toString() {
        return `(${this.name}, ${this.number}, ${this.balance})`;
    }
}

let acct = new Account('Justin Lin', '123-4567', 1000);
acct.withdraw(5000);
console.log(`帳戶資訊：${acct.toString()}`);