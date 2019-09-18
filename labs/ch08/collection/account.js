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
    // 實作內容

    withdraw(money) {
        // 實作內容
        acct.balance -= money;
    }

    deposit(money) {
        // 實作內容
    }        

    toString() {
        // 實作內容
        return `(${acct.name}, ${acct.number}, ${acct.balance})`;
    }
}

let acct = new Account('Justin Lin', '123-4567', 1000);
try {
    acct.withdraw(500);
    console.log(acct.toString());
}
catch(e) {
    if(e instanceof InsufficientException) {
        console.log(`${e.name}：${e.message}`);
    }
    else {
        throw e;
    }
} 
