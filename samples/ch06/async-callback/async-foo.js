function foo() {
    setTimeout(console.log, 1000, 'foo');
}

console.log('begin');
foo();
console.log('end');