class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap: Record<number, number> = {};

        for (const [i, num] of nums.entries()) {
            let complement = target - num;

            if (hashMap[complement] !== undefined) {
                return [hashMap[complement]!, i];
            }

            hashMap[num] = i;
        }

        return [];
    }
}
