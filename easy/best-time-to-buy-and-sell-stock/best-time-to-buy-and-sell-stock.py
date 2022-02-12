class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxPrice = 0
        minPrice = float('inf')
        for price in prices:
            minPrice = min(price, minPrice)
            maxPrice = max(price - minPrice, maxPrice)
        return maxPrice
