$(document).ready(function () {
    
    $("#listado").change(function (e) { 
        e.preventDefault();

        
        $("#tabla").removeClass('invisible');
        $("#tabla").addClass('visible');
        
        serie = $("#listado").val();
        
        if ($("#listado").val() == 0){
            $("#tabla").removeClass('visible');
            $("#tabla").addClass('invisible');
        }
        
        $("#serie").text(serie);
        $("#dia").text(setDias(serie));
        $("#horario").text(setHorario(serie));
    });

    function setDias(serie){

        switch (serie) {
            case 'Dr. House': return 'Lunes';
            break;

            case 'Prison Break': return 'Martes';
            break;

            case 'The Walking Dead': return 'Miercoles';
            break;

            case 'Game of Throne': return 'Jueves';
            break;

        }

    }

    function setHorario(serie){

        switch (serie) {
            case 'Dr. House': return '18:00';
            break;
            case 'Prison Break': return '19:00';
            break;
            case 'The Walking Dead': return '18:00';
            break;
            case 'Game of Throne': return '20:00';
            break;

        }

    }
    
});