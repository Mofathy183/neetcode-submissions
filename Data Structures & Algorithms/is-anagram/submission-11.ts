class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const hashMap: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            let letterS = s[i] as string;
            let letterT = t[i] as string;

            let curS = hashMap[letterS] ?? 0;
            hashMap[letterS] = curS + 1;

            let curT = hashMap[letterT] ?? 0;
            hashMap[letterT] = curT - 1;
        }

        for (const v of Object.values(hashMap)) {
            if (v !== 0) return false;
        }

        return true;
    }
}
