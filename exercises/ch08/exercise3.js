let fs = require('fs');

function isLittleEndian(filename) {
    let content = fs.readFileSync(filename);
    return content[0] === 255 && content[1] === 254;
}

function isBigEndian(filename) {
    let content = fs.readFileSync(filename);
    return content[0] === 254 && content[1] === 255;
}

console.log(isLittleEndian('test.txt'));
console.log(isBigEndian('test.txt'));
