//javaScript
//Zadanie 8.4
//Pole trójkąta

/*var a = 2,
	h = 7,
	triangleArea = a*h/2;

	document.write('Pole trójkąta o podstawie a= '+a+' i wysokości h= '+h+' równa się '+triangleArea);
	console.log('Pole trójkąta o podstawie a= '+a+' i wysokości h= '+h+' równa się '+triangleArea);*/


var a = prompt('Wpisz długość podstawy trójkąta'),
	h = prompt('Wpisz wysokość trójkąta'),
	triangleArea = a*h/2;

	alert('Pole trójkąta o podstawie a= '+a+' i wysokości h= '+h+' równa się '+triangleArea);

	document.getElementById('area').innerHTML=('Pole trójkąta o podstawie a= '+a+' i wysokości h= '+h+' równa się '+triangleArea);
	console.log('Pole trójkąta o podstawie a= '+a+' i wysokości h= '+h+' równa się '+triangleArea);