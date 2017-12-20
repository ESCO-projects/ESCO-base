function secondScreenGSAP() {

var tl = new TimelineMax();

var svgIcons = $('.icon_container .icon');

tl
	.to('#particles-js', 0.3, { opacity: 1, ease: Power0.easeNone})
	.staggerTo('.vacancy__item', 1.2, { opacity: 1, scale: 1, y:0, ease: Elastic.easeOut.config(0.5, 0.5) }, 0.2, '-=0.2')
	.staggerTo(svgIcons, 0.6, { opacity: 1, scale: 1 }, 0.1)
};
module.exports = secondScreenGSAP;//export function