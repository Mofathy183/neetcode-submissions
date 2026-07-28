class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const hashMap = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            let letterS = s[i] as string;
            let letterT = t[i] as string;

            let curS = hashMap.get(letterS) ?? 0;
            hashMap.set(letterS, curS + 1);

            let curT = hashMap.get(letterT) ?? 0;
            hashMap.set(letterT, curT - 1);
        }

        for (const v of hashMap.values()) {
            if (v !== 0) return false;
        }

        return true;
    }
}
