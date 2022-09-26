func isValid(s string) bool {

	p := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}

	stack := []rune{}

	for _, ch := range s {
		if closed, ok := p[ch]; ok {
			stack = append(stack, closed)
			continue
		}
		last := len(stack) - 1
		if last < 0 {
			return false
		}
		expected := stack[last]
		stack = stack[:last]
		if ch != expected {
			return false
		}
	}
	return len(stack) == 0
}