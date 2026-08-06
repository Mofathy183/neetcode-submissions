class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {};
        for (const num of nums) {
            count[num] = count[num] ? count[num] + 1 : 1;
        }

        const buckets: number[][] = Array.from(
            { length: nums.length + 1 },
            () => [],
        );

        for (const [n, c] of Object.entries(count)) {
            buckets[c]?.push(Number(n));
        }

        const results: number[] = [];

        for (let i = buckets.length - 1; i > -1; i--) {
            if (buckets[i]?.length === 0) continue;

            for (const num of buckets[i]) {
                if (results.length === k) return results;

                results.push(num);
            }
        }

        return results;     
    }
}
