import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {

    // Oculta el menú principal y lo hace más pequeño
    // cuando se desplaza hacia abajo.
    $(document).ready(function() {
      updateMenu();
      $(window).on('scroll', updateMenu);
    });


    function updateMenu() {
      var scrolltop = $(window).scrollTop();
      var smallHeader = $("#header-small");
      var mainHeader = $("#header");
      var buttonMenu = $("#button-menu");
      var time = 500; // Tiempo que tarda en fundirse.
      var upperLimit = 100; // Pixeles desde donde comenzará a ocultarse el menú.

      if (scrolltop > upperLimit) {
        mainHeader.fadeOut(time);
        smallHeader.show();
        buttonMenu.removeClass("in-mainHeader");
        buttonMenu.addClass("in-smallHeader");
      } else {
        mainHeader.fadeIn(time);
        smallHeader.hide();
        buttonMenu.addClass("in-mainHeader");
        buttonMenu.removeClass("in-smallHeader");
      }
    }


    // Muestra un botón que permite expandir un menú de secciones
    // cuando la pantalla es muy pequeña (horizontalmente).
    $(document).ready(function() {

      function update() {
        var windowsize = $(window).width();
        var container = $("#mobile-menu-container");
        windowsize = $(window).width();

        if (windowsize > 978) {
          container.hide();
        } else {
          container.css('display','block');
        }

      }

      update();

      $(window).resize(function() {
        update();
      });

      function restoreButton() {
        $("#button-menu").html("☰");
      }

      function changeButton() {
        $("#button-menu").html("✖");
      }

      function hideMenu() {
        $("#mobile-menu").hide();
        restoreButton();
      }

      // Se asegura de cerrar el menú cuando se seleccione alguna opción.
      $("#mobile-menu a").click(function() {
        hideMenu();
      });

      // Muestra el menú si se pulsa el botón.
      $("#button-menu").click(function() {
        var invisibleMenu = ($("#mobile-menu").css('display') === "none");

        if (invisibleMenu) {
          $("#mobile-menu").show();
          changeButton();
        } else {
          $("#mobile-menu").hide();
          restoreButton();
        }

      });

    });





  }
});
