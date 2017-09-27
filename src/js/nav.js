const $nav = $('.mobile-nav');
const $burgerIcon = $('.burger-icon');
const $anchors = $('.mobile-nav ul li a');
const bars = $('.bar1, .bar2, .bar3');
console.log(bars);

$burgerIcon.on('click', () => {
	bars.toggleClass('change');
	$nav.toggle('medium');
});

$anchors.on('click', (e) => {
	$anchors.removeClass('active-nav');
	e.target.classList.toggle('active-nav');
});