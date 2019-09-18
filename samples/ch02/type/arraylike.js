// 這是個陣列
let arr = [10, 20, 30];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

// 這是長得像陣列的物件
let arrayLike = {
    '0' : 10,
    '1' : 20,
    '2' : 30,
    length : 3    
};
for(let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);    
}