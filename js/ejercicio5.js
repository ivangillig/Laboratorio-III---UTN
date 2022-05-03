$(document).ready(function () {
    
    $("#listado").change(function (e) { 
        e.preventDefault();

        
        $("#tabla").removeClass('invisible');
        $("#tabla").addClass('visible');
        
        libro = $("#listado").val();
        
        if ($("#listado").val() == 0){
            $("#tabla").removeClass('visible');
            $("#tabla").addClass('invisible');
        }
        
        $("#libro").text(libro);
        $("#condicion").text(setEstado(libro));
        setDevolucion(libro);
     
    });

    function setEstado(libro){

        switch (libro) {
            case 'Divergente': return 'Sólo lectura en sala';
            break;

            case 'Frozen': return 'Para préstamo';
            break;

            case 'Sirenas': return 'Para préstamo';
            break;

            case 'Insurgente': return 'Sólo lectura en sala';
            break;

        }

    }

    function setDevolucion(libro){

        var estado = setEstado(libro);
        
        if (estado == 'Para préstamo') {
            var fechaDevolucion = new Date();
            fechaDevolucion.setDate(fechaDevolucion.getDate()+5)

            $("#devolucion").text('Devolver antes del ' + fechaDevolucion.toLocaleDateString("es-AR"));

        }

    }
    
});