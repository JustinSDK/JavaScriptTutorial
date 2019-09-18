class Stack {
    empty() {
        return this.length === 0;
    }

    push(...items) {
        return Array.prototype.push.apply(this, items);
    }

    pop() {
        return Array.prototype.pop.call(this);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2, 3);
console.log(stack);

stack.pop();
console.log(stack);
