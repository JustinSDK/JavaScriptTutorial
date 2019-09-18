class Account {
    // 定義類別
}

let acct = new Account('Justin Lin', '123-4567', 1000);
for(let p in acct) {
    console.log(`${p}: ${acct[p]}`);
}