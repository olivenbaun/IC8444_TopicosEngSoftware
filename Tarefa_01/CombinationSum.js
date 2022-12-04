// Exercício  número 39 extraído do site LeetCode.com

const combinationSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let resArr = [];
    let tryArr = [];
    return tryComb(target, 0);
    
    function tryComb(remain, start) {
        if (remain === 0) {
            return resArr.push(tryArr.slice());
        } 

        const numsLen = nums.length
        for (let i = start; i < numsLen; i++) {
            const curNum = nums[i]
            if (curNum > remain) continue;
            
            tryArr.push(curNum);
            tryComb(remain - curNum, i);
            tryArr.pop();
        }
        return resArr;
    }
};
