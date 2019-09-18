function raw(strings, ...values) {
    let collector = [];
    for(let i = 0; i < values.length; i++) {
        collector.push(strings.raw[i]);
        collector.push(values[i]);
    } 
    collector.push(strings.raw[values.length]);
    return collector.join('');
}

console.log(raw`This \u1234 \n is a ${1 + 2}`);