function initialize() {
  var mapOptions = {
    center: { 
      lat: 51.517132821130396, 
      lng: -0.13424357030400919
    },
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  /*
  var marker = new google.maps.Marker({
      position: { 
        lat: 51.619100894000624, 
        lng: -3.9980129258861368
      },
      map: map,
      title: 'Hello Digital 2015'
  });
  */
}
google.maps.event.addDomListener(window, 'load', initialize);
