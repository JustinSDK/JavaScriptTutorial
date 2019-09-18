function asyncFoo(n, callback) {
    setTimeout(
        () => callback(n * Math.random()), 
        2000
    );    
}

asyncFoo(10, console.log);