class IllegalArgumentError extends Error {
    constructor(message) {
        super(message);
    }

    get name() {
        return IllegalArgumentError.name;
    }
}

class Exception extends Error {
    constructor(message) {
        super(message);
    }

    get name() {
        return Exception.name;
    }
}

class InsufficientException extends Exception {
    constructor(message, balance) {
        super(message);
        this.balance = balance;
    }

    get name() {
        return InsufficientException.name;
    }
}

class Account {
    constructor(name, number, balance) {
        this.name = name;
        this.number = number;
        this.balance = balance;
    }

    withdraw(money) {
        if(money < 0) {
            throw new IllegalArgumentError('提款金額不得為負');
        }    
        
        if(money > this.balance) {
            throw new InsufficientException('餘額不足', this.balance);
        }
        this.balance -= money;
    }

    deposit(money) {
        if(money < 0) {
            throw new IllegalArgumentError('存款金額不得為負');
        }    
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
    if(e instanceof InsufficientException) {
        console.log(`${e.name}：${e.message}`);
        console.log(`目前餘額：`, e.balance);
    }
    else {
        throw e;
    }
}