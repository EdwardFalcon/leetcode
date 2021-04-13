import "math"

func maxProfit(prices []int) int {
	max := 0
	minPrice := math.MaxInt32
	for _, price := range prices {
		if price < minPrice {
			minPrice = price
		} else if price-minPrice > max {
			max = price - minPrice
		}
	}
	return max
}