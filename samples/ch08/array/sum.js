function sum(...values) {
    return values.reduce((acct, value) => acct + value);
}

console.log(sum(1, 2, 3, 4, 5));