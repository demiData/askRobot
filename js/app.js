$(document).ready(function(){
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
}