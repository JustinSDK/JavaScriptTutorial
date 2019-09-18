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

// 實作內容

let acct = new Account('Justin Lin', '123-4567', 1000);
for(let p in acct) {
    console.log(`${p}: ${acct[p]}`);
}