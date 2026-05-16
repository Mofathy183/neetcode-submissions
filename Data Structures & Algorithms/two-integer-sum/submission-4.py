class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        target_indexes = []
        for i in range(len(nums)):
            if len(target_indexes) >= 2: break
            for j in range(len(nums)):
                if j == i: continue
                if nums[j] + nums[i] == target:
                    if j > i:
                        target_indexes = [i, j]
                    else:
                        target_indexes = [j, i]
                    break
        return target_indexes