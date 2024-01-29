function balancedParenthesis(string) {
	return !string.split('').reduce(function (previous, char) {
		// check for )(
		if (previous < 0) {
			return previous;
		}
		if (char === '(') {
			return ++previous;
		}
		if (char === ')') {
			return --previous;
		}
		return previous;
	}, 0);
}

// true if parenthesis are balanced
balancedParenthesis('()');
