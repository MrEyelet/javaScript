var btnAdd = document.getElementById('addElem');
var btnRemove = document.getElementById('removeElem');
var unorderedList = document.getElementById('list');
var items = document.getElementsByTagName('li');

btnAdd.addEventListener('click', function() {
	unorderedList.innerHTML += '<li>' + 'item ' + items.length + '</li>';
});
btnRemove.addEventListener('click', function() {
	unorderedList.removeChild(items[items.length - 1]);
});

