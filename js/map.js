function initialize() {
  var mapOptions = {
    center: { 
      lat: 51.619100894000624, 
      lng: -3.9980129258861368
    },
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
