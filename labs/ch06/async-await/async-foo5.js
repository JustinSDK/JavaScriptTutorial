function asyncFoo(n) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(n * Math.random()), 
            2000
        );
    });
}

function asyncFoos(nums) {
    let iter = nums[Symbol.iterator]();
    class AsyncIter {
        [Symbol.asyncIterator]() {
            return this;
        }

        async next() {
            let r = iter.next();
            if(r.done) {
                return {value: undefined, done: true};
            }
            return {value: await asyncFoo(r.value), done: false};
        }

        async return(value) {
            // 令之後呼叫next()不會有進一步迭代結果
            while(!iter.next().done) {}
            console.log(value);
            return Promise.resolve({value, done: true});
        }
    }
    return new AsyncIter();
}

(async function() {
    let it = asyncFoos([10, 20, 30]);
    for await (let n of it) {
        console.log(n);
        break;
    }
})();
