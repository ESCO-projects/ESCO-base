function fourScreenGSAP() {

	var text = $('.steps__text-container p'),
			number = $('.steps__numbers li'),
			//line = $('.steps__numbers li::after'),
			finish  = $('.steps__finish');

var tl = new TimelineMax();
tl
	.staggerFromTo(number, 0.4, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, }, 0.7)
	.staggerFromTo(text, 0.4, { opacity: 0 }, { opacity: 1 }, '0.7', '-=4.2')
	.fromTo(finish, 0.7, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: -0.4 })

};//close fullScroll fuction

module.exports = fourScreenGSAP;//export function