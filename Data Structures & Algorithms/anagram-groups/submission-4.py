class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}
        
        for str in strs: 
            sorted_word = "".join(sorted(str))
            
            if (sorted_word in hash_map):
                hash_map[sorted_word].append(str)
            else:
                hash_map[sorted_word] = [str]

        return list(hash_map.values())