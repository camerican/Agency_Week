// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var map;

function initializeMap(location){
    	
    	console.log(location);
        // show button on initialize
        // add click handler to send ajax
        $('#location_save').fadeIn().click(function(event){
            $.ajax({
                url: '/map',
                method: 'POST',
                data: {
                    x: location.coords.latitude,
                    y: location.coords.longitude,
                    // to do: we need to actually look
                    // the current_user up; probably via
                    // erb and @current_user.id
                    user_id: 1
                },
                complete: function(){
                    $(event.target).fadeOut();
                }
            })
        });



    	var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

    	var mapsOptions = {
    		center: currentLocation,
    		zoom: 20,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};

    	 map = new google.maps.Map(document.getElementById('map'), mapsOptions);

    	 var marker = new google.maps.Marker({
    	 	position: currentLocation,
    	 	map: map
    	
    	});
			
				function createInfoWindow(text){
  				var infowindow = new google.maps.InfoWindow({
    				content: text
  				});
  				return infowindow;
				}

				var info = createInfoWindow(document.getElementById("homeless_marker"));
						google.maps.event.addListener(marker, 'click', function() {
  						info.open(map,marker);
							});


    	}
$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(initializeMap)
});

    