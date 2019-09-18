class Queue {
    offer(...elems) {
        return Array.prototype.push.apply(this, elems);
    }

    poll() {
        return Array.prototype.shift.call(this);
    }
}

let queue = new Queue();
queue.offer(1);
queue.offer(2, 3);
console.log(queue);

queue.poll();
console.log(queue); 
