import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement(){
    var $container = $('.lightbox-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.lightbox-wrapper .item',
            layoutMode: 'fitRows'
        });
    });
    $('.lightbox-wrapper .filter li a').click(function () {

        $('.lightbox-wrapper .filter li a').removeClass('active');
                
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
    }
});
