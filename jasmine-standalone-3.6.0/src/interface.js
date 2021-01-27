$(document).ready(function() {

    var thermostat = new Thermostat;

    $(".temp-inc-btn").on('click', function(){
        thermostat.up();

        $(".temp-display").text(thermostat.temp);

    });
    
})