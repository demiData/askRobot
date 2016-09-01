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

$(".text_process").click(function(){

    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {sentence: $("#yoda_input").val()}, // Additional parameters here
        datatype: 'json',
        success: function (data) {
            $("#output").html(data);
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "0Ag18LnIwomshwNByoretdNBojbMp1ZI9vHjsnhY1exVIjmN8L"); // Enter here your Mashape key
        }
    });

});


