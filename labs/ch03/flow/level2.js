let score = 88;
let quotient = score / 10;
let level;
switch(quotient) { 
    case 10: 
    case 9: 
        level = 'A';
        break; 
    case 8: 
        level = 'B';
        break; 
    case 7: 
        level = 'C';
        break; 
    case 6: 
        level = 'D';
        break; 
    default: 
        level = 'E';
}
console.log('得分等級：', level);
