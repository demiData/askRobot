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




    setBindings();
});



function setBindings (){
    var lastView = "";
    var currentView = "";



	$(".menu-view ul li").click(function(e){
		 

		 var menuID = e.currentTarget.id + "View";
		 lastView = currentView;
		 currentView = menuID;
         

		 $('#' + currentView).transition({ x: '-40%' });
		  $('#' + lastView).transition({ x: '100%' });
		
		});


var mapCanvas = document.getElementById("map");
var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
}
var map = new google.maps.Map(mapCanvas, mapOptions);

}