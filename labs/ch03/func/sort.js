function sort(nums) {
    // 找出未排序中最小值
    function minIndex(left, right) {
        if(right === nums.length) {
            return left;
        } else if(nums[right] < nums[left]) {
            return minIndex(right, right + 1);
        }
        else {
            return minIndex(left, right + 1);
        }
    }

    for(let i = 0; i < nums.length; i++) {
        let selected = minIndex(i, i + 1);
        if(i !== selected) {
            // 交換 i 與 selected 處的元素
            let tmp = nums[i];
            nums[i] = nums[selected];
            nums[selected] = tmp;
        }
    }
}

let nums = [10, 3, 5, 2, 4];
sort(nums);
console.log(nums);

