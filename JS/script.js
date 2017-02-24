var femaleNames = ['Paulina', 'Asia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

var newName = prompt('Dodaj swoje imię');
if (allNames.indexOf(newName) === -1) {
	allNames[8] = newName;
	document.getElementById('names').innerHTML = (allNames);
	document.getElementById('new-name').innerHTML = ('Twoje imię '+ newName +' zostało dodane do tablicy.');
} else {
	alert('Takie imię jest już w bazie.');
	document.getElementById('names').innerHTML = (allNames);
	document.getElementById('new-name').innerHTML = ('Wpisałeś imię '+ newName +'. Takie imię już istnieje, dlatego nie zostało dodane do tablicy.');
} 

console.log(allNames);