let mouse = function() {
    function visit(maze, pt, end) {
        if(isVisitable(maze, pt)) {
            maze[pt.x][pt.y] = 1;
            if(!isEnd(maze, end) && !tryOneOut(maze, pt, end)) {
                maze[pt.x][pt.y] = 0;
            }
        }
        return isEnd(maze, end);
    }
    
    function isVisitable(maze, pt) {
        return maze[pt.x][pt.y] === 0;
    }
    
    function isEnd(maze, end) {
        return maze[end.x][end.y] === 1;
    }
    
    function tryOneOut(maze, pt, end) {
        return visit(maze, {x: pt.x, y: pt.y + 1}, end) ||
               visit(maze, {x: pt.x + 1, y: pt.y}, end) ||
               visit(maze, {x: pt.x, y: pt.y - 1}, end) ||
               visit(maze, {x: pt.x - 1, y: pt.y}, end);
    }
    
    return function(maze, start, end) {
        visit(maze, start, end);
        return maze;
    };
    
}();

let maze = mouse([[2, 2, 2, 2, 2, 2, 2],
                  [2, 0, 0, 0, 0, 0, 2],
                  [2, 0, 2, 0, 2, 0, 2],
                  [2, 0, 0, 2, 0, 2, 2],
                  [2, 2, 0, 2, 0, 2, 2],
                  [2, 0, 0, 0, 0, 0, 2],
                  [2, 2, 2, 2, 2, 2, 2]],
                  {x: 1, y: 1}, {x: 5, y: 5});

for(let row of maze) {
    let layout = '';
    for(let block of row) {
        switch(block) {
            case 0: layout += '  '; break;
            case 1: layout += '◇'; break;
            case 2: layout += '█';
        }
    }
    console.log(layout);
}
