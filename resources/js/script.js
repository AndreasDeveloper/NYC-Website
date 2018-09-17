$(document).ready(function() {

        /* Scroll on Buttons Setup */
        $('.js--scroll-to-about').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
        });

        /* Navigation Scroll To Sections Setup */
        // HOME
        $('.js--scroll-to-home').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
        });

        // ABOUT
        $('.js--scroll-to-about').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
        });

        // POINTS OF INTEREST
        $('.js--scroll-to-poi').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-poi').offset().top}, 1000);
        });

        // WHERE TO
        $('.js--scroll-to-whereto').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-whereto').offset().top}, 1000);
        });

        // TESTIMONIALS
        $('.js--scroll-to-test').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-test').offset().top}, 1000);
        });

        // MAP
        $('.js--scroll-to-map').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-map').offset().top}, 1000);
        });

        /* Maps */
        var map = new GMaps ({
            div: '.map',
            lat: 40.7461072,
            lng: -73.9934508,
              zoom: 13
          });
        
        // TIME SQUARE MARKER \\
        map.addMarker ({
        lat: 40.7589545,
        lng: -73.9893574,
        title: 'Time Square',
          infoWindow: {
            content: '<p>Time Square</p>'
          }
      });

      // CENTRAL PARK MARKER \\
      map.addMarker ({
        lat: 40.7729504,
        lng: -73.9686542,
        title: 'Central Park',
          infoWindow: {
            content: '<p>Central Park</p>'
          }
      });
});