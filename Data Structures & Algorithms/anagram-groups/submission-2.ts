class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length < 2) return [strs];

        const hashMap: Record<string, string[]> = {};

        const sorted = (word: string): string =>
            word
                .split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");

        for (const str of strs) {
            const sortedWord = sorted(str);

            if (hashMap[sortedWord] !== undefined) {
                hashMap[sortedWord].push(str);
            } else {
                hashMap[sortedWord] = [str];
            }
        }

        return Object.values(hashMap);
    }
}
