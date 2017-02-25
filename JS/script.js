var text = 'Papuga kosi trawę, unosząc się nad ziemią 15 centymetrów, na czerwonej chmurze danych.';
var newAnimal = "Zielona Kodilla";
var btnLeft = document.getElementById('true');
var btnRight = document.getElementById('false');

	newAnimal = newAnimal.toUpperCase();
	newAnimal = text.replace(text.substr(0, 6), newAnimal);
	newAnimal = newAnimal.substr(0, newAnimal.length/2);

btnLeft.addEventListener('click', function(event) {
	alert('Nieprawda ! '  + newAnimal);
	document.getElementById('cut').innerHTML=('Tekst w oknie dialogowym został celowo ucięty');
});
btnRight.addEventListener('click', function(event) {
	alert('Oczywiście, że fałsz bo przecież '  + newAnimal);
	document.getElementById('cut').innerHTML=('Tekst w oknie dialogowym został celowo ucięty');
});


console.log(newAnimal);