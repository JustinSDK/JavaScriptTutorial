// 實作範例

let matched = '0970-666888, 0970-168168'.matchAll(/((\d{4})-(\d{6}))/g);
console.log(Array.from(matched));
