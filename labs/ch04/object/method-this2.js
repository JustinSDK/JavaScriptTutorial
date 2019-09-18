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

console.log(toString.call(p1));  // [Justin,35] 
console.log(toString.call(p2));  // [momor,32] 