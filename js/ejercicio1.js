$(document).ready(function(){
    //Todo el código a ejecutar cuando el DOM está listo para recibir instrucciones.


    $("#suma").click(function(){

        var nro1 = $("#num1").val();
        var nro2 = $("#num2").val();
        
        var resultado = parseFloat(nro1)+parseFloat(nro2);
        const signo = escero(resultado);
        
        $("#resultado").val(resultado);
        $("#txtres").html('')
        $("#txtres").append(signo)

    });

    $("#resta").click(function(){

        var nro1 = $("#num1").val();
        var nro2 = $("#num2").val();
        
        var resultado = parseFloat(nro1)-parseFloat(nro2);
        const signo = escero(resultado);
        
        $("#resultado").val(resultado);
        $("#txtres").html('')
        $("#txtres").append(signo)

    });

    $("#multiplicacion").click(function(){

        var nro1 = $("#num1").val();
        var nro2 = $("#num2").val();
        
        var resultado = parseFloat(nro1)*parseFloat(nro2);
        const signo = escero(resultado);
        
        $("#resultado").val(resultado);
        $("#txtres").html('')
        $("#txtres").append(signo)

    });

    $("#division").click(function(){

        var nro1 = $("#num1").val();
        var nro2 = $("#num2").val();
        
        if (nro2 != 0){
            var resultado = parseFloat(nro1)/parseFloat(nro2);
        }else{
            alert('El divisor debe ser distinto de 0')
            var nro2 = $("#num2").val('');
        }
        
        const signo = escero(resultado);

        $("#resultado").val(resultado);
        $("#txtres").html('')
        $("#txtres").append(signo)

    });

    $("#borrar").click(function(){
        borrarTodo();
    });

});


function escero(resultado){
    if (resultado >= 0){
        return 'Es Positivo';
    }else{
        if(resultado == 0){
            return 'Es 0';
        }else{
            return 'Es Negativo'
        }
    }
}

function borrarTodo(){
    $("#num1").val('');
    $("#num2").val('');
    $("#resultado").val('');
    $("#txtres").html('')
}