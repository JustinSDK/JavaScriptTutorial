function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

// 實作內容