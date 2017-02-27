var btnAdd = document.getElementById('addElem');
var btnRemove = document.getElementById('removeElem');
var unorderedList = document.getElementById('list');
var itemNumber = document.getElementsByTagName('li').length;

btnAdd.addEventListener('click', function(event) {
	unorderedList.innerHTML += '<li>' + 'item ' + (((itemNumber) += 1)-1) + '</li>';
});
btnRemove.addEventListener('click', function(event) {
	unorderedList.removeChild(unorderedList.childNodes[2]);
});
