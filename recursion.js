function power(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
}

function isEven(number){
	if (number === 1) {
		return false;
	}
	else if (number === 0) {
		return true;
	}
	else {
		return (isEven(number - 2));
	}
}
