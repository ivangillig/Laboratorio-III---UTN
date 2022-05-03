$(document).ready(function () {
    
    $("#listado").change(function (e) { 
        e.preventDefault();

        //Si existe la columna con fecha de devolución la elimino
        $(".agregado").remove();

        //cuando selecciono un libro hago visible la tabla 
        $("#tabla").removeClass('invisible');
        $("#tabla").addClass('visible');
        
        libro = $("#listado").val();
        
        //si vuelvo a seleccionar la opcion sin libro escondo la tabla de nuevo
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

            //si el libro está ok para prestamo le sumo 5 días a partir de la fecha de consulta
            fechaDevolucion.setDate(fechaDevolucion.getDate()+5)

            //agrego la columna con fecha de devolución, le pongo la clase agregado para poder eliminarla cuando cambie
            $("#columna").append(`<th class="agregado">Devolución</th>`);
            $("#fila").append(`<td class="agregado">` +  fechaDevolucion.toLocaleDateString("es-AR") + "</td");


        }

    }
    
});