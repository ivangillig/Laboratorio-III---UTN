$(document).ready(function () {
    
    $("#edad").click(function (e) { 
        e.preventDefault();

        
        var nac = new Date($('#fechaNacimiento').val());
        var hoy =  new Date();

        let resta = hoy.getTime() - nac.getTime();

        let diferencia = (Math.round(resta / (1000*60*60*24))) 

        
        console.log(nac.getTime())
    });


});