function firstScreenGSAP() {


var tl = new TimelineMax();

tl
	.fromTo('.head__night', 5, { opacity:1 }, { opacity:0, ease: Sine.easeInOut, delay: 1})
	.to('.sun', 5, { x:0, y:0, scale:0.8, ease: Sine.easeInOut, delay:-5 })
	.to('.moon', 5, { transform: 'translate(-140vw,100vh) scale(0.4)', ease: Sine.easeInOut, delay:-5 })
	.to('.head__center h2', 0.1, { opacity: 1, ease: Power3.easeInOut})
	.staggerFromTo('.head__center span.letter', 0.3, { opacity: 0 }, { opacity: 1, ease: Back.easeOut.config(3)}, 0.04)
	.fromTo('.head__map', 0.5, { opacity:0, x:150,  }, { opacity:1, x:0, ease: Back.easeOut.config(2.7), });


};//close fullScroll fuction

module.exports = firstScreenGSAP;//export function