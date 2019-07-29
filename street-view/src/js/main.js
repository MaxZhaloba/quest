    var panorama = null;
    var currentPlaceIndex = 0;
    const places = [
        { panId: 'tjW_9p-_OzKrYxPRjmvyrQ', heading: 15, pitch: 0},
        { panId: 'CSKy2bwnay5X3alzAHEPFw', heading: 15, pitch: 0},
        { panId: 'CSKy2bwnay5X3alzAHEPFw', heading: -15, pitch: 15},
        { panId: 'CSKy2bwnay5X3alzAHEPFw', heading: -15, pitch: 45},
        { panId: 'CSKy2bwnay5X3alzAHEPFw', heading: -15, pitch: 15},
        { panId: 'r3d-ZzK2WMmJ0JXorfP4ng', heading: -30, pitch: 15},
        { panId: 'r3d-ZzK2WMmJ0JXorfP4ng', heading: -45, pitch: 15},
        { panId: 'r3d-ZzK2WMmJ0JXorfP4ng', heading: -60, pitch: 15},
        { panId: 'r3d-ZzK2WMmJ0JXorfP4ng', heading: -75, pitch: 15},
        { panId: 'r3d-ZzK2WMmJ0JXorfP4ng', heading: -90, pitch: 15}
    ];

      function initialize() {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              pov: {
                heading: 15,
                pitch: -5
              }
            });
        moveToCurrentPlace();
      }

      function moveToCurrentPlace() {
        var currentPlace = places[currentPlaceIndex];

        panorama.setPano(currentPlace.panId);
        panorama.setPov({ heading: currentPlace.heading, pitch: currentPlace.pitch });
      }

    document.getElementById("move").addEventListener("click", function(){
        currentPlaceIndex += 1;
        if (currentPlaceIndex >= places.length)
            currentPlaceIndex = 0;

        moveToCurrentPlace();
    });

    document.getElementById("headingSlider").addEventListener("input", function(){
        var heading = parseInt(this.value);
        // console.log("Rotating to ", heading);

        panorama.setPov({ heading: heading, pitch: 0});
    });