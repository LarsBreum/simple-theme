const $nav = $('.nav');
const $burgerIcon = $('.burger-icon');

$burgerIcon.on('click', () => {
	$nav.toggle();
});