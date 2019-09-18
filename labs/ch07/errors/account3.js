class IllegalArgumentError extends Error {
    // 實作範例
}

class InsufficientException extends Error {
    // 實作範例
}

class Account {
    constructor(name, number, balance) {
        this.name = name;
        this.number = number;
        this.balance = balance;
    }

    withdraw(money) {
        // 實作範例
        
        
        this.balance -= money;
    }

    deposit(money) {
        // 實作範例
        this.balance += money;
    }    

    toString() {
        return `(${this.name}, ${this.number}, ${this.balance})`;
    }
}

let acct = new Account('Justin Lin', '123-4567', 1000);
try {
    acct.withdraw(5000);
}
catch(e) {
    // 實作範例
}