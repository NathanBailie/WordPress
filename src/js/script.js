'use strict'

let upChevron = document.querySelector('.up-chevron');
let clientHeight = document.documentElement.clientHeight;


upChevron.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: "instant"
	});

})

window.addEventListener('scroll', function () {
	if (document.documentElement.scrollTop > clientHeight) {
		upChevron.style.display = 'block';
	} else {
		upChevron.style.display = 'none';
	}
});