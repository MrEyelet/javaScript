var a = prompt('Wpisz dowolną wartość dla parametru a'),
	b = prompt('Wpisz dowolną wartość dla parametru b'),
	value = (a * a) + (2 * a * b) - (b * b);
	console.log(value);

	if (value > 0) {
		alert('Wynik jest dodatni');
		document.getElementById('type-of-calculation').innerHTML = ('Wynik jest dodatni');
		console.log('Wynik jest dodatni');
	} else if (value < 0) {
		alert('Wynik jest ujemny');
		document.getElementById('type-of-calculation').innerHTML = ('Wynik jest ujemny');
		console.log('Wynik jest ujemny');
	} else if (value === 0) {
		alert('Wynik ma wartość równą 0');
		document.getElementById('type-of-calculation').innerHTML = ('Wynik jest równy 0');
		console.log('Wynik ma wartość równą 0');
	} else {
		alert('Nie wpisałeś poprawnie liczb');
		document.getElementById('type-of-calculation').innerHTML = ('Nie wpisałeś poprawnie liczb !');
	}

	console.log('Gdy a = '+ a +' , b = '+ b +' wynik jest równy '+ value);
	document.getElementById('math-patern').innerHTML=('Gdy a = [ '+ a +' ] , b = [ '+ b +' ] wynik jest równy '+ value);
