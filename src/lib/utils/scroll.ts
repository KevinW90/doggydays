export function scrollTo(el: HTMLElement | null) {
	if (el) window.scrollTo(0, el.offsetTop);
	else console.log('no element');
}
