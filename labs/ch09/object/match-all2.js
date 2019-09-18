// 實作範例

if(!has(String.prototype, 'matchAll')) {
    Object.defineProperty(String.prototype, 'matchAll', {
        value: function(regex) {
            let allMatched = [];
            let matched;
            while((matched = regex.exec(this)) != null) {
                allMatched.push(matched);
            }
            return allMatched;
        },
        writable: true,
        configurable: true
    });
}

let matched = '0970-666888, 0970-168168'.matchAll(/((\d{4})-(\d{6}))/g);
console.log(Array.from(matched));
