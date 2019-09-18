function map(array, mapper) {
    if(array.length === 0) {
        return array;
    }

    let head = array[0];
    let tail = array.slice(1);
    let mapped = mapper(head);

    return [mapped].concat(map(tail, mapper));
}

let arr = [1, 2, 3];
console.log(map(arr, elem => elem * 10));