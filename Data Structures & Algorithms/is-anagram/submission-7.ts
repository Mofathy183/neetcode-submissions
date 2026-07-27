class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sorted = (text: string): string =>
            text
                .split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");
        return sorted(s) == sorted(t);
    }
}
