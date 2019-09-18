let array = [1, 2, 3];

// 實作範例

let proxy = revocable.proxy;

proxy[0];
console.log();

proxy[1] = 20;
console.log();

proxy.push(1);
console.log();

revocable.revoke();
proxy.push(2);
console.log();
