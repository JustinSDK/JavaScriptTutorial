function randomDivided(divisor, callback) {
    setTimeout(
        () => {
            let n = Math.floor(Math.random() * 10);
            // 實作範例
            callback(divisor / n);
        },
        1
    );
}

// 實作範例