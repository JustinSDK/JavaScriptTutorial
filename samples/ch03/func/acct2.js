function account(name, number, balance) {
    return {name: name, number: number, balance: balance || 100};
}

console.log(account('Justin', '123-4567'));
console.log(account('Monica', '765-4321', 1000));
