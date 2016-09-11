$(document).ready(function(){
    $( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});

	$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});

     

    	     var map;
  			 var infowindow;
             var request;
  			 var service;
  			 var markers = [];


  				function initialize() {
  				 var center = new google.maps.LatLng(34.1486075,-118.01689658);

  				 map = new google.maps.Map(document.getElementById('map'), {
  				   center: center,
  				   zoom: 13
  				 });
              

  				 request = {
  				 	 location: center,
  				 	 radius: 8047,
  				 	 types: ['cafe']
  				 };

  				 	infowindow = new google.maps.InfoWindow();

  				 	var service = new google.maps.places.PlacesService(map);

  				 	service.nearbySearch(request, callback);

  				 	google.maps.event.addListener(map, 'click', function(event) {
  				 		map.setCenter(event.latLng)
  				 		clearResults(markers)

  				 		var request = {
  				 			location: event.latLng,
  				 			radius: 8047,
  				 			types: ['cafe']
  				 		};

  				 		service.nearbySearch(request, callback);
  				 	})
  				}

  				function callback(results, status) {
  					if(status == google.maps.places.PlacesServiceStatus.OK) {
  						for (var i = 0; i < results.length; i++) {
  							markers.push(createMarker(results[i]));
  						}
  					}
  				}

  				function createMarker(place){
  					var placeLoc = place.geometry.location;
  					var marker = new google.maps.Marker({
  						map: map,
  						position: place.geometry.location
  					});

  					google.maps.event.addListener(marker, 'click',function() {
  						infowindow.setContent(place.name);
  						infowindow.open(map, this);
  					});

  					return marker;
  				}

  				 function clearResults(markers) {
  				 	for (var m in markers) {
  				 		markers[m].setMap(null)
  				 	}
  				 	markers = []

                 }


				
  				google.maps.event.addDomListener(window, 'load', initialize);
  				
        
   



});


 


