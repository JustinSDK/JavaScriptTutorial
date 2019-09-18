function* producer(n) {
    for(let data = 0; data < n; data++) {
        console.log('生產了：', data);
        yield data;
    }
}

function* consumer(n) {
    for(let i = 0; i < n; i++) {
        let data = yield;
        console.log('消費了：', data);
    }
}

function clerk(n, producer, consumer) {
    console.log('執行', n, '次生產與消費');
    let p = producer(n);
    let c = consumer(n);
    c.next();
    for(let data of p) {
        c.next(data);
    }
}

clerk(5, producer, consumer);