// Check for duplicate integers in an array.
// Returns true if any integer appears more than once, otherwise false.
// Example: nums = [1, 2, 3, 3] returns true; nums = [1, 2, 3, 4] returns false.


class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for( var i = 0; i < nums.length; i ++){
            if(set.has(nums[i])){
                return true
            }else{
                set.add(nums[i])
            } 
        } 
        return false;
    }
}
