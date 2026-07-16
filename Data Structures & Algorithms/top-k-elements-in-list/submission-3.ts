class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let frequency_map: [number, number][] = [];

        const count = (num: number): number => {
            return nums.reduce((acc, cur) => (cur === num ? acc + 1 : acc), 0);
        };

        for (const n of new Set<number>(nums)) {
            frequency_map.push([n, count(n)]);
        }

        frequency_map.sort((a, b) => b[1] - a[1]);

        return frequency_map.slice(0, k).map((item) => item[0]);
    }
}
