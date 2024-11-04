const $GNB = document.getElementsByTagName('header')[0];
var nowScrollValue = -Infinity;
var lastScrollValue = Infinity;

window.addEventListener('scroll', function() {
	lastScrollValue = nowScrollValue;
	nowScrollValue = window.scrollY;
	//console.log(lastScrollValue, nowScrollValue);
	if (lastScrollValue < nowScrollValue) {
		$GNB.classList.remove('visible');
		$GNB.classList.add('invisible');

	} else{
		$GNB.classList.remove('invisible');
		$GNB.classList.add('visible');

	}
});