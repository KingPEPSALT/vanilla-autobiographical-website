const searchBarInput = document.getElementsByTagName('input')[0];
searchBarInput.addEventListener('focus', () => {
	document.getElementsByClassName('search-bar-container')[0].style.borderBottomRightRadius = '19px';
	document.getElementsByClassName('search-bar')[0].style.borderRadius = '12px';
	document.getElementsByClassName('search-bar-container')[0].style.backgroundColor = '#353535';
});
searchBarInput.addEventListener('blur', () => {
	document.getElementsByClassName('search-bar-container')[0].style.borderBottomRightRadius = '10px';
	document.getElementsByClassName('search-bar')[0].style.borderRadius = '5px';
	document.getElementsByClassName('search-bar-container')[0].style.backgroundColor = '#010101';
});
searchBarInput.addEventListener('keypress', (e) => {
	if (e.code == 'Enter') {
		let query = searchBarInput.value;
		if (query != '') {
			window.open('https://www.google.com/search?q=' + query);
		}
	}
});

function scrollMove(element, lDestination, direction) {
	element.style.right = lDestination + 'px';
	return;
}

let direction = 0;
let lDestination = 0;
const scrollables = document.getElementsByClassName('scrollable');
const scrollablesReversed = [].slice.call(scrollables, 0).reverse();
document.addEventListener('wheel', (e) => {
	if (e.deltaY > 0) {
		direction = 1;
		lDestination = 0;
	} else {
		direction = -1;
		lDestination = -100;
	}
	let count = 0;
	if (direction == 1) {
		for (const scrollable of scrollables) {
			count += 1;
			setTimeout(() => {
				scrollMove(scrollable, lDestination, direction);
			}, 30 * count);
		}
	} else {
		for (const scrollable of scrollablesReversed) {
			count += 1;
			setTimeout(() => {
				scrollMove(scrollable, lDestination, direction);
			}, 30 * count);
		}
	}
});
