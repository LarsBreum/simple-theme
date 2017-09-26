const $nav = $('.nav');
const $burgerIcon = $('.burger-icon');
const bars = $('.bar1, .bar2, .bar3');
console.log(bars);
$burgerIcon.on('click', () => {
	bars.toggleClass('change');
	$nav.toggle();
});