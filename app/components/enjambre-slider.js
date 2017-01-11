import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {

    let slider = this.$("#slider").revolution({
      sliderType: "hero",
      startwidth: 1920,
      startheight: 1080,
      sliderLayout: "fullwidth",
    });

    slider.on("revolution.slide.onloaded", () => {
      // Una vez cargado el slider, hace visibles los caption de nuevo.
      if (this.$(".caption-invisible")) {
        this.$(".caption-invisible").removeClass("caption-invisible");
      }
    });

  }
});
