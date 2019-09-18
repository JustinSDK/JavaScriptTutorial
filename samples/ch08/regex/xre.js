class Xre extends RegExp {
    [Symbol.match](str) {
        if(this.global) {
            let result = [];
            result.matchedAll = [];
            let matched;
            while((matched = this.exec(str)) != null) {
                result.push(matched[0]);
                result.matchedAll.push(matched);
            }
            return result.length === 0 ? null : result;
        }
        else {
            return super[Symbol.match](str);
        }
    }
}

let regex = new Xre(/((\d{4})-(\d{6}))/g);
let matched = '0970-666888, 0970-168168'.match(regex);
console.log(matched.matchedAll); 
