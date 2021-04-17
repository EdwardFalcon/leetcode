func countBits(num int) []int {
	result := make([]int, num+1)
	start := 0
	end := 1
	for i := 1; i <= num; i++ {
		result[i] = result[start] + 1
		start++
		if start >= end {
			start = 0
			end = i + 1
		}
	}
	return result

}