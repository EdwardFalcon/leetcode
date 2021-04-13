func createTargetArray(nums []int, index []int) []int {
	result := []int{}
	for i := range nums {
		temp := append([]int{}, result[:index[i]]...)
		temp = append(temp, nums[i])
		temp = append(temp, result[index[i]:]...)
		result = temp
	}
	return result
}