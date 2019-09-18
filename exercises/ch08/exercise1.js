function isPalindrome(text) {
    let chars = Array.from(text);
    while(chars.length > 1) {
        if(chars.shift() !== chars.pop()) {
            return false;
        }
    }
    return true;
}

let words = ['RADAR', 'WARTER START', 'MILK KLIM', 'RESERVERED','IWI', "ABBA"];
console.log(words.filter(isPalindrome));