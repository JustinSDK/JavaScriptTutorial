class Xre extends RegExp {
    // 實作內容
}

let regex = new Xre(/((\d{4})-(\d{6}))/g);
let matched = '0970-666888, 0970-168168'.match(regex);
console.log(matched.matchedAll); 
