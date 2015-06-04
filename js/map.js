function initialize() {
  var mapOptions = {
    center: { 
      lat: 51.517132821130396, 
      lng: -0.13424357030400919
    },
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
