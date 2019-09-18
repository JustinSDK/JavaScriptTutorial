function isNarcissistic(number) {
    let digits = [];
    let num = number;
    while(num != 0) {
        digits.push(num  % 10);
        num = parseInt(num / 10);
    }
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], digits.length);
    }
    return sum == number;
}
    
function narcissistic(n) {
    let armstrongs = [];
    let bound = Math.pow(10, n < 40 ? n : 39);
    for(let i = 1; i < bound; i++) if(isNarcissistic(i)) {
        armstrongs.push(i);
    }
    return armstrongs;
}

console.log(narcissistic(3).filter(n => n > 100));