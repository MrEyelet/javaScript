var threeButtons = document.getElementsByClassName('btn');

for(var button = 0; button < threeButtons.length; button++) {
	var threeButtonsInnerText = threeButtons[button].innerText;
	alert(threeButtonsInnerText);
}

console.log(threeButtons)