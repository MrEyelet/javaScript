var btnAdd = document.getElementById('addElem');
var btnRemove = document.getElementById('removeElem');
var unorderedList = document.getElementById('list');
var items = document.getElementsByTagName('li');

<<<<<<< HEAD
btnAdd.addEventListener('click', function() {
	unorderedList.innerHTML += '<li>' + 'item ' + items.length + '</li>';
});
btnRemove.addEventListener('click', function() {
	unorderedList.removeChild(items[items.length - 1]);
});

=======
btnAdd.addEventListener('click', function(event) {
	unorderedList.innerHTML += '<li>' + 'item ' + (((itemNumber) += 1)-1) + '</li>';
});
btnRemove.addEventListener('click', function(event) {
	unorderedList.removeChild(unorderedList.childNodes[2]);
});
>>>>>>> fe6519251daeb9b2e2e52bf8d9a0e25ec98a936b
