const $aboutSubj = $('.about-subject');
const $codeCard = $('.code');
const $educationCard = $('.education');
const $employmentCard = $('.employment');
const $moreCard = $('.more');
const $links = $('.about-box-nav ul li a');

$links.on('click', (e) => {
	console.log(e);
	$links.removeClass('active-nav');
	e.target.classList.toggle('active-nav');
	if (e.target.innerText.toLowerCase() === 'code') {
		$aboutSubj.hide();
		$codeCard.show();
	} else if (e.target.innerText.toLowerCase() === 'education') {
		$aboutSubj.hide();
		$educationCard.show();
	} else if (e.target.innerText.toLowerCase() === 'employment') {
		$aboutSubj.hide();
		$employmentCard.show();
	} else if (e.target.innerText.toLowerCase() === 'more') {
		$aboutSubj.hide();
		$moreCard.show();
	}
} );