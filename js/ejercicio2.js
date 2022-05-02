$(document).ready(function () {
    
    $("#estado").click(function (e) { 
        e.preventDefault();

        var nt1 = $("#nota1").val();
        var nt2 = $("#nota2").val();
        var asistencia = $('#asistencia').val();
        console.log(asistencia)
        
        resultado = estado(nt1, nt2, asistencia);
        
        $("#resultado").val(resultado);

    });

    function estado(nt1, nt2, asistencia) { 

    var estado;

        if (asistencia < 80){
            return 'Libre';
        }else {
            if (nt1 < 6 || nt2 < 6 ) {
                return 'Desaprobado';
            }else{
                return 'Regular'
            }

        }
     }

});