function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('Niepoprawne dane, wpisz wartość większą od zera');
	}
	return a * h / 2
}

var triangleArea1 = getTriangleArea(5,10),
	triangleArea2 = getTriangleArea(20,10),
	triangleArea3 = getTriangleArea(5,6);

console.log(triangleArea1, triangleArea2, triangleArea3);