'use strict'

let upChevron = document.querySelector('.up-chevron');
let clientHeight = document.documentElement.clientHeight;

upChevron.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

window.addEventListener('scroll', function () {
	if (document.documentElement.scrollTop > clientHeight) {
		upChevron.style.display = 'flex';
	} else {
		upChevron.style.display = 'none';
	};
});