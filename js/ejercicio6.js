$(document).ready(function () {

   
    comprobarCarrito()
    var cantidadTotal = 0;
    var montoTotal = 0;
    
    $("#listado").change(function (e) { 
        
        e.preventDefault();

        //Compruebo que el item seleccionado sea valido para mostrar el formulario de ventas
        if ($("#listado").val() != 'Lista de productos'){

        var productoElegido = $("#listado").val();

        $("#producto").text(productoElegido);
        $("#precioUnitario").text(buscarPrecio(productoElegido));

        
        $("#tablaSeleccion").removeClass('invisible');
        }
    });


    $("#subtotal").click(function (e) { 

        if (cantidadTotal == 3) {
           alert('El máximo de productos a vender es 3');
           return;
        }

        //variable auxiliar para crear nuevas filas en la tabla
        cantidadTotal ++;

        e.preventDefault();

        $("#listatbody").append(`<tr id="${cantidadTotal}-nuevaFila"></tr>`);
        
        $(`#${cantidadTotal}-nuevaFila`).append(`<td id="${cantidadTotal}-productoTotal"</td>`);
        $(`#${cantidadTotal}-nuevaFila`).append(`<td id="${cantidadTotal}-cantidadTotal"</td>`);
        $(`#${cantidadTotal}-nuevaFila`).append(`<td id="${cantidadTotal}-unitarioTotal"</td>`);
        $(`#${cantidadTotal}-nuevaFila`).append(`<td id="${cantidadTotal}-sumaTotal"</td>`);
        //$(`#${cantidadTotal}-nuevaFila`).append(`<td> <a id="eliminarItem" class="btn btn-primary w-50 text-bold" href="#" role="button">Eliminar</a> </td>`);

        $(`#${cantidadTotal}-productoTotal`).text($("#producto").text());
        $(`#${cantidadTotal}-cantidadTotal`).text($("#cantidad").val());
        $(`#${cantidadTotal}-unitarioTotal`).text($("#precioUnitario").text());

        //Calculo el total según la cantidad elegida
        var unitario = $("#precioUnitario").text()
        var cantidad = $("#cantidad").val()

        $(`#${cantidadTotal}-sumaTotal`).text(unitario * cantidad);

        //voy sumando el total para mostrarlo cuando necesite
        montoTotal +=  unitario * cantidad;

        comprobarCarrito();
        
    });

    $("#sumarTotal").click(function (e) { 
        e.preventDefault();
        
        $("#resultadoTotal").val('$ ' + montoTotal);
    });

    //intento de borrar item uno por uno, queda pendiente
    //Tengo que escuchar el evento de manera distinta porque el boton fue creado despues de renderizar el DOM
    // $(document).on('click','#eliminarItem',function(e){
    //     e.preventDefault();

    //     console.log(e)
    // });

    $("#limpiarFormulario").click(function (e) { 
        e.preventDefault();

        $("#1-nuevaFila").remove();
        $("#2-nuevaFila").remove();
        $("#3-nuevaFila").remove();

        $("#tablaSeleccion").addClass('invisible');
        $("#resultadoTotal").val(0);

        cantidadTotal = 0;
        montoTotal = 0;

        comprobarCarrito();
        
    });


    function comprobarCarrito(){

        //funcion que esconde tablas/formularios si no hay nada en el carro

        if (cantidadTotal > 0) {
            $("#tablaCarrito").removeClass('invisible');
            $("#sumarTotal").removeClass('invisible');
            $("#tablaResultado").removeClass('invisible');
        }else{
            $("#tablaCarrito").addClass('invisible');
            $("#sumarTotal").addClass('invisible');
            $("#tablaResultado").addClass('invisible');
        }

    }



    function buscarPrecio (productoElegido){

        switch (productoElegido) {

            case 'Notebook Vaio Intel Core I3':
                return 30000;
                break;
                
            case 'Notebook Lenovo Intel Core I7':
                return 45000;
                break;

            case 'Notebook Compaq Intel Core I7':
                return 50000;
                break;

            case 'Notebook RCA Intel Core I3':
                return 9000;
                break;

            case 'Notebook Positivo BGH CoreI7':
                return 45000;
                break;

            case 'Impresora Multifunción HP':
                return 5400;
                break;

            case 'Tablet Philco Intel 16 GB':
                return 6700;
                break;

            case 'Tablet Huawei 16 GB':
                return 4400;
                break;
        }
    }


});