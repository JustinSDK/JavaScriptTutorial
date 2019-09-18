function ascend(n1, n2) {
    return n1 - n2;
}

function descend(n1, n2) {
    return n2 - n1;
}

let arr = [100, 10, 20, 30, 200, 300];
console.log(arr.sort(ascend));
console.log(arr.sort(descend));