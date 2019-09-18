let obj = {
    name : 'Justin',
    age : 44,
    childs : [ {name : 'Irene', age : 11} ]
};

let json = JSON.stringify(obj, 
    (key, value) => key === 'age' ? undefined : value
);

console.log(json); 