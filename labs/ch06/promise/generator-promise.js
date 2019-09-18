function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

function async(g) {
    // 實作內容
}

// 實作內容