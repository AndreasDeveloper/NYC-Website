$(document).ready(function() {

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