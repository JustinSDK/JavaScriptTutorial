let json = '{"name":"Justin","age":44,"childs":[{"name":"Irene","age":11}]}';

let obj = JSON.parse(json, 
    (key, value) => key === 'age' ? undefined : value
);

console.log(obj); // { name: 'Justin', childs: [ { name: 'Irene' } ] }