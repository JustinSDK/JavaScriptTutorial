let queens = function() {
    let column = [];
    let slash = [];
    let backSlash = [];
    let queens = [];
    
    function backTrack(n, i, take) {
        if(i >= n) {
            take(n, queens);
        }
        else {
            for(let j = 0; j < n; j++) if(isVisitable(i, j, n)) {
                queens[i] = j;
                column[j] = slash[i + j] = backSlash[i - j + n] = 1; 
                backTrack(n, i + 1, take); 
                column[j] = slash[i + j] = backSlash[i - j + n] = 0;
            }
        }
    }
    
    function isVisitable(i, j, n) {
        return !(column[j] || slash[i + j] || backSlash[i - j + n]);
    }
    
    return (n, take) => backTrack(n, 0, take);
}();

queens(8, function(n, qs) {
    for(let y = 0; y < n; y++) {
        let layout = '';
        for(let x = 0; x < n; x++) {
            layout += (qs[y] === x) ? 'Ｑ' : '。';
        }
        console.log(layout);
    }
    console.log();
});