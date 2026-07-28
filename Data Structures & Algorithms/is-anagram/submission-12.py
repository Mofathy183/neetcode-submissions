class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hash_map = {}

        for i in range(len(s)):
            current_s = hash_map.get(s[i], 0)
            hash_map[s[i]] = current_s + 1

            current_t = hash_map.get(t[i], 0)
            hash_map[t[i]] = current_t - 1

        for v in hash_map.values():
            if v != 0:
                return False

        return True