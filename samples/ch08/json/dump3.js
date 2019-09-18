let obj = {
    name: 'Justin',
    age: 44,
    toJSON() {
        return {
            name : this.name.toUpperCase(), 
            age  : this.age
        };
    }
};

// {"name":"JUSTIN","age":44}
console.log(JSON.stringify(obj));