class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length <= 1) return [strs]

        const hashMap: Record<string, string[]> = {}

        for (const word of strs) {
            let key = word.split("").sort().join("")
            if (!hashMap[key]) {
                hashMap[key] = []
            }
            hashMap[key].push(word)
        }

        return Object.values(hashMap)
    }
}
