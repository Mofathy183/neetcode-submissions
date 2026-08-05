class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count: dict[int, int] = {num: nums.count(num) for num in nums}

        buckets: list[list[int]] = [[] for _ in range(len(nums) + 1)]

        for l, c in count.items():
            buckets[c].append(l)

        results: list[int] = []

        for i in range(len(buckets) - 1, -1, -1):
            if len(buckets[i]) == 0:
                continue

            for num in buckets[i]:
                if len(results) == k:
                    return results

                results.append(num)

        return results