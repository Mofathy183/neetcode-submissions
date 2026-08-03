class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if len(strs) < 2: return [strs]
    
        hash_map = defaultdict(list)
        
        for str in strs:
            count = [0] * 26
            
            for c in str:
                count[ord(c) - ord("a")] += 1
            
            hash_map[tuple(count)].append(str)
        
        return list(hash_map.values())