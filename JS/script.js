var btnAdd = document.getElementById('addElem');
var btnRemove = document.getElementById('removeElem');
var unorderedList = document.getElementById('list');
var itemNumber = document.getElementsByTagName('li').length;

btnAdd.addEventListener('click', function(event) {
	unorderedList.innerHTML += '<li>' + 'item ' + (((itemNumber) += 1)-1) + '</li>';
	//alert('Do listy <ul> zostanie dodany ' + itemNumber + ' element <li>');
});
btnRemove.addEventListener('click', function(event) {
	unorderedList.removeChild(unorderedList.childNodes[2]);
	//alert('Z listy <ul> zostanie usunięty ' + ((itemNumber) -= 1) + ' element <li>');
});