var femaleNames = ['Paulina', 'Asia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

var newName = prompt('Dodaj swoje imię');
if (allNames.indexOf(newName) === -1) {
	allNames[8] = newName;
} else {
	alert('Takie imię jest już w bazie.');
} 

document.getElementById('names').innerHTML = (allNames);
document.getElementById('new-name').innerHTML = (newName);

console.log(allNames);