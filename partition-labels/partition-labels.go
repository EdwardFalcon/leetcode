import "strings"

func partitionLabels(S string) []int {
	arr := strings.Split(S, "")
	result := []int{}
	start := 0
	end := 0
	check := 0
	for start < len(arr) && check < len(arr) {
		for i := check; i < len(arr); i++ {
			if arr[i] == arr[check] && i > end {
				end = i
			}
		}
		if check < end {
			check++
		} else {
			result = append(result, end-start+1)
			start = end + 1
			end = start
			check = start
		}
	}
	return result
}