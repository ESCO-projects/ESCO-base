function thirdScreenGSAP() {

var tl = new TimelineMax();

var people = $('.people__people p'),
		people_sun = $('.people__sun'),
		guy = $('.walk');

tl
	.to(people_sun, 1, { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)})
	.staggerTo(people, 1, { opacity: 1, x: 0, ease: Back.easeOut.config(1.5)}, 0.3)
};

module.exports = thirdScreenGSAP;//export function