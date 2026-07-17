class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {}
        for (const num of nums) {
            count[num] = 1 + (count[num] ?? 0)
        }

        const freq: number[][] = []
        for (let i = 0; i < nums.length + 1; i++) {
            freq[i] = []
        }

        for (const [n, c] of Object.entries(count)) {
            const num = Number(n)
            freq[c]?.push(num) 
        }

        const result: number[] = []
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const num of freq[i] ?? []) { // here
                result.push(num)
                if (result.length === k) {
                    return result
                }
            }
        }

        return result
    }
}
