class Account {
    constructor(name, number, balance) {
        // 實作內容
    }

    // 定義取值方法

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

// 實作內容

let acct = new Account('Justin Lin', '123-4567', 1000);
for(let p in acct) {
    console.log(`${p}: ${acct[p]}`);
}