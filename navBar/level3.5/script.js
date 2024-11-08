const $GNB = document.getElementsByTagName('header')[0];
const $TITLE = document.getElementsByClassName('title')[0];
var nowScrollValue, lastScrollValue = 0;

window.addEventListener('scroll', function() {
	lastScrollValue = nowScrollValue;
	nowScrollValue = window.scrollY;
	//console.log(lastScrollValue, nowScrollValue);
	
	if (lastScrollValue < nowScrollValue) {
		$GNB.classList.remove('visible');
		$GNB.classList.remove('gnbTransparent');
		$GNB.classList.add('invisible');
		$TITLE.setAttribute('src', 'dlackedBlue.svg');

	} else{
		$GNB.classList.remove('invisible');
		$GNB.classList.remove('gnbTransparent');
		$GNB.classList.add('visible');
		$TITLE.setAttribute('src', 'dlackedBlue.svg');
		if (nowScrollValue === 0) {
			$GNB.classList.add('gnbTransparent');
			$TITLE.setAttribute('src', 'dlackedWhite.svg');
		}
	}
});

$GNB.addEventListener('mouseenter', function () {
	if (nowScrollValue === 0) {
		$TITLE.setAttribute('src', 'dlackedBlue.svg');
	}
})

$GNB.addEventListener('mouseleave', function () {
	if (nowScrollValue === 0) {
		$TITLE.setAttribute('src', 'dlackedWhite.svg');
	}
})