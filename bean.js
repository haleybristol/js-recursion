function countBs(string) {
	var beez = 0;
	for ( i = 0; i < string.length; i ++ ) {
		if (string.charAt(i) === 'B') {
			beez++;
		}
	}
	return beez;
}

console.log(countBs('hallloBitch'));