let obj = {
    name : 'Justin',
    age : 44,
    childs : [ {name : 'Irene', age : 11} ]
};

// {"name":"Justin","age":35,"childs":[{"name":"hamimi","age":3}]}
console.log(JSON.stringify(obj));

//{"name":"Justin","age":35}
console.log(JSON.stringify(obj, ['name', 'age']));