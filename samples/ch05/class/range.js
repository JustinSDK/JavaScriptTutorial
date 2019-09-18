class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    *[Symbol.iterator]() {
        for(let i = this.start; i < this.end; i++) {
            yield i;
        }
    }

    toString() {
        return `Range(${this.start}...${this.end - 1})`;
    }   
}

let range = new Range(1, 4);
for(let i of range) {
    console.log(i);            // 顯示 1 2 3
}
console.log(range.toString()); // 顯示 Range(1...3)