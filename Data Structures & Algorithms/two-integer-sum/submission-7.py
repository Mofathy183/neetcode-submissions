class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        target_indexes = [[num, i] for i , num in enumerate(nums)]
        target_indexes.sort()

        i, j = 0, len(target_indexes) - 1

        # while the i which is the first index is less than the j which is the end of the array
        # so will not get any index out of the range error

        while i < j:
            result = target_indexes[i][0] + target_indexes[j][0]
            if result == target:
                return [
                    min(target_indexes[i][1], target_indexes[j][1]),
                    max(target_indexes[i][1], target_indexes[j][1])
                ]

            if result < target:
                i += 1
            else:
                j -= 1
        return []