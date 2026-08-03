class Solution:
    def strToCode(self, word: str) -> list[int]:
        count = [0] * 26
        for c in word:
            count[ord(c) - ord("a")] += 1
        return count
    
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if len(strs) < 2: return [strs]
        
        hash_map = defaultdict(list)
        
        for str in strs:
            count = self.strToCode(str)
            hash_map[tuple(count)].append(str)
        
        return list(hash_map.values())