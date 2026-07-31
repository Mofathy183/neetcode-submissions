class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i] as number
            let complement = target - num;

            if (hashMap[complement] !== undefined) {
                return [hashMap[complement], i];
            }

            hashMap[num] = i;
        }

        return [];
    }
}
