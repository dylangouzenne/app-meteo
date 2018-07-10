
$("#rechercher").click(function recherche(){


$.get("https://www.prevision-meteo.ch/services/json/Toulouse", function(meteo){

var temperature = meteo.current_condition.tmp;
var imageUrl = meteo.current_condition.icon;

$("#display").append('<p>il fait actuellement ' + temperature + '°C <img src="' + imageUrl + '">');

});
})