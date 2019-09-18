function toString() {
    return `[${this.name}, ${this.age}]`;
}

let p1 = {
    name     : 'Justin', 
    age      : 35,
    toString : toString
};

let p2 = {
    name     : 'momor', 
    age      : 32,
    toString : toString
};

console.log(p1.toString());  // [Justin,35] 
console.log(p2.toString());  // [momor,32] 