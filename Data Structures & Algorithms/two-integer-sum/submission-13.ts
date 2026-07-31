class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i]!;

            if (complement in hashMap) {
                return [hashMap[complement]!, i];
            }

            hashMap[nums[i]!] = i;
        }

        return [];
    }
}
