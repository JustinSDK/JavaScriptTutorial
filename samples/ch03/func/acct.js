function account(name, number, balance = 100) {
    return {name, number, balance};
}

console.log(account('Justin', '123-4567'));
console.log(account('Monica', '765-4321', 1000));
