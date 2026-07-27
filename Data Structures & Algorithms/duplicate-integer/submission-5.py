class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        set_nums = set[int]()

        for n in nums:
            if n in set_nums:
                return True
            else:
                set_nums.add(n)
        return False