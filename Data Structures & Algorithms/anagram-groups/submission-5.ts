class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length < 2) return [strs];

    const hashMap: Record<string, string[]> = {};

        for (const str of strs) {
            let count: number[] = Array(26).fill(0);

            for (const c of str) {
                const index = c.charCodeAt(0) - "a".charCodeAt(0);
                count[index] = (count[index] ?? 0) + 1;
            }

            let key = count.join(",");

            if (!hashMap[key]) hashMap[key] = [];

            hashMap[key]?.push(str);
        }

        return Object.values(hashMap)
    }
}
