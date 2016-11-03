import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement(){
		/* Video inicial */
		$("#welcome-video").bind("ended", function() {
			$("#welcome-video-container").fadeOut("slow");
		});
		
		/* Quienes somos home */
		$("#quienes-somos-video-home").bind("play", function() {
			$("#quienes-somos-home-link").fadeOut("fast");
		});
		$("#quienes-somos-video-home").bind("ended", function() {
			$("#quienes-somos-home-link").fadeIn("slow");
		});
		$("#quienes-somos-video-home").bind("pause", function() {
			$("#quienes-somos-home-link").fadeIn("slow");
		});
		
		/* Que hacemos home */
		$("#que-hacemos-video-home").bind("play", function() {
			$("#que-hacemos-home-link").fadeOut("fast");
		});
		$("#que-hacemos-video-home").bind("ended", function() {
			$("#que-hacemos-home-link").fadeIn("slow");
		});
		$("#que-hacemos-video-home").bind("pause", function() {
			$("#que-hacemos-home-link").fadeIn("slow");
		});
	}
});
