let nums = [1, 2, 3];

Object.defineProperty(nums, 'append', {
    value: function(arr) {
        return Array.prototype.push.apply(this, arr);
    }
})

nums.append([4, 5, 6]);
console.log(nums);