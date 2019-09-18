function hanoi(n , a, b, c) {
    if(n === 1) {
        return [{from: a, to: c }]
    }
    return hanoi(n - 1, a, c, b).concat(
           hanoi(1, a, b, c), 
           hanoi(n - 1, b, a, c)
    );
}
    
for(let move of hanoi(3, 'A', 'B', 'C')) {
    console.log(`盤從 ${move.from} 移至 ${move.to}`);
}