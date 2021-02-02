func isValid(s string) bool {
    
    p := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
    }
    
    stack := []rune{};

    for _, ch := range s {
        next, ok := p[ch];
        if ok {
            stack = append(stack, next)
            continue;
        }
        n := len(stack) - 1;
        if n < 0 {
            return false
        }
        t := stack[n]
        stack = stack[:n]
        if ch != t {
            return false
        }
    }
    return len(stack) == 0
}