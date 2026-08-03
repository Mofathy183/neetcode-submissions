class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    strToCode(word: string): number[] {
        let count: number[] = Array(26).fill(0);

        for (const c of word) {
            const index = c.charCodeAt(0) - "a".charCodeAt(0);
            count[index] = (count[index] ?? 0) + 1;
        }

        return count;
    }

    groupAnagrams(strs: string[]): string[][] {
        if (strs.length < 2) return [strs];

        const hashMap: Record<string, string[]> = {};

        for (const str of strs) {
            const count = this.strToCode(str)

            let key = count.join(",");

            if (!hashMap[key]) hashMap[key] = [];

            hashMap[key]?.push(str);
        }

        return Object.values(hashMap)
    }
}
