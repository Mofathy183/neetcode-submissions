class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        dict_s = {l: s.count(l) for l in set(s)}
        dict_t = {l: t.count(l) for l in set(t)}

        return dict_s.items() <= dict_t.items()