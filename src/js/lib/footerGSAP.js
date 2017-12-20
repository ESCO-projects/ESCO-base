function footerGSAP() {

var tl = new TimelineMax();
tl
	.to('.footer__contact', 0.3, { opacity: 1, y: -30, ease: Power0.easeNone})
	.to('.footer__call-back', 0.3, { opacity: 1, y: -14, ease: Power0.easeNone, delay: -0.1})
};

module.exports = footerGSAP;