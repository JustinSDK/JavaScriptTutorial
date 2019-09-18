let fibonacci = function() {
    let fib = [0, 1];
    return function(n) {
        if(n >= fib.length) for(let i = fib.length; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
    };
}();
    
for(let i = 0; i < 20; i++) { 
    console.log(fibonacci(i)); 
}