let knight = function() {    
    function possible(board, step) {
        return [[-2, 1], [-1, 2], [1, 2],   [2, 1], 
                [2, -1], [1, -2], [-1, -2], [-2, -1]]
                .map(dir => ({x: step.x + dir[0], y: step.y + dir[1]}))
                .filter(s => isVisitable(board, s)); 
    }
    
    function isVisitable(board, step) {
        return step.x > -1 && step.x < 8 &&
               step.y > -1 && step.y < 8 &&
               board[step.x][step.y] === undefined;
    }
    
    function hard(board, steps) {
        minIndex = 0;
        minPossibleSteps = possible(board, steps[0]);
        for(let i = 0; i < steps.length; i++) {
            possibleSteps = possible(board, steps[i]);
            if(possibleSteps.length < minPossibleSteps.length) {
                minIndex = i;
                minPossibleSteps = possibleSteps;
            }
        }
        return steps[minIndex];
    }
    
    return function(start) {
        let board = [[], [], [], [], [], [], [], []];
        board[start.x][start.y] = 1;
        current = start;
        for(let s = 2; s < 65; s++) {
            possibleSteps = possible(board, current);
            if(possibleSteps.length === 0) {
                break;
            }
            if(possibleSteps.length === 1) {
                current = possibleSteps[0];
            } else {
                current = hard(board, possibleSteps);
            }
            board[current.x][current.y] = s;
        }
        return board;
    };
}();

for(let row of knight({x: 5, y: 6})) {
    let layout = '';
    row.forEach(function(step) {
        layout += ' ' + ((step + '').length === 2 ? '' : ' ') + step;
    });
    console.log(layout);
}