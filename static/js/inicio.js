/*SQUARES SIZE*/
window.onload = squares();
window.addEventListener('resize', function(event) {
    squares();
}, true);

function squares(){
	let items = document.querySelectorAll('.square');
	let tamano = items[0].offsetWidth;
	console.log(tamano);
	for (var i = 0; i < items.length; i++) {
		items[i].setAttribute("style","height:"+tamano+"px") ;
	}
}


/*CHANGING TEXT*/
window.onload = changingText();

function changingText(){
	let counter = 0;
	let items = document.querySelectorAll('#changingText li');
	let itemsNumber = items.length;
	
	items[counter].classList.toggle('oculto');
	setInterval(
		function () {
			items[counter].classList.toggle('oculto');
			counter++;
			if (counter == itemsNumber) {
				counter = 0;
			}
			items[counter].classList.toggle('oculto');
		},
		2000
	);
}