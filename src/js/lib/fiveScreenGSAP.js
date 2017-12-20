function fiveScreenGSAP() {

var tl = new TimelineMax();
var train_clouds = $('.train__clouds div');
tl
	.staggerTo(train_clouds, 2, { opacity: 1, scale: 1, ease: Back.easeOut.config(2) }, 0.25)
};

module.exports = fiveScreenGSAP;