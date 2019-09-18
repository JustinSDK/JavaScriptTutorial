function Account(name, number, balance) {
    this.getName = () => name;
    this.getNumber = () => number;
    this.getBalance = () => balance;
    this.toString = () => `(${name}, ${number}, ${balance})`;
}

let acct1 = new Account('Justin Lin', '123-4567', 1000);
let acct2 = new Account('Monica Huang', '987-654321', 2000);
let acct3 = new Account('Irene Lin', '135-79864', 500);

console.log(acct1.toString());
console.log(acct2.toString());
console.log(acct3.toString());
console.log('name' in acct1);