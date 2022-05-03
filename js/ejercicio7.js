$(document).ready(function () {

    var montoTotal = 0;
    var carrito = [];
    comprobarCarrito()

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

        if (carrito.length == 3) {
           
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El máximo de productos a vender es 3!'
          })

           return;
        }

        e.preventDefault();

        producto = $("#producto").text();
        cantidad = $("#cantidad").val();
        precioUnitario = $("#precioUnitario").text();

        //Creo un objeto item y lo inserto en el array carrito
        item = {
            id : carrito.length == 0 ? carrito.length +1 : carrito.length,
            prd : producto,
            cant : cantidad,
            unitario : precioUnitario
                }
     
        carrito.push(item);

         //Limpio el campo de calculo total
         $("#resultadoTotal").val(0);

        //llamo a la funcion mostrar carrito que itera el array de items
        mostrarCarrito();
        
        
    });


    function mostrarCarrito(){

        //Elimino la tabla cada vez que cargo un nuevo item para poder iterar el array de objetos item desde 0
            $("#0-nuevaFila").remove();
            $("#1-nuevaFila").remove();
            $("#2-nuevaFila").remove();
            montoTotal = 0;

        //itero el array de objetos item para mostrar la tabla de carrito
        carrito.forEach( item => {
            
            //Aplico array destructuring para usar las variables de cada item
            var {prd, cant, unitario} = item;

            id = carrito.indexOf(item);
            
            $("#listatbody").append(`<tr id="${id}-nuevaFila"></tr>`);
        
            $(`#${id}-nuevaFila`).append(`<td id="${id}-productoTotal"</td>`);
            $(`#${id}-nuevaFila`).append(`<td id="${id}-cantidadTotal"</td>`);
            $(`#${id}-nuevaFila`).append(`<td id="${id}-unitarioTotal"</td>`);
            $(`#${id}-nuevaFila`).append(`<td id="${id}-sumaTotal"</td>`);
            $(`#${id}-nuevaFila`).append(`<td id="${id}"> <a id="eliminarItem" class="btn btn-primary w-50 text-bold" href="#" role="button">Eliminar</a> </td>`);
    
            $(`#${id}-productoTotal`).text(`${prd}`);
            $(`#${id}-cantidadTotal`).text(`${cant}`);
            $(`#${id}-unitarioTotal`).text(`${unitario}`);

            //Calculo el total según la cantidad elegida, tengo que pasarlo a int porque lo leo desde el obj
            var unit = parseInt(unitario)
            var cantidad = parseInt(cant)

            $(`#${id}-sumaTotal`).text(unit * cantidad);
            
        //voy sumando el total para mostrarlo cuando necesite
        montoTotal +=  unit * cantidad;

        comprobarCarrito();

        })
  

    };

    $("#sumarTotal").click(function (e) { 
        e.preventDefault();
        
        $("#resultadoTotal").val('$ ' + montoTotal);
    });

    
    //Tengo que escuchar el evento de manera distinta porque el boton fue creado despues de renderizar el DOM
    $(document).on('click','#eliminarItem', function(e){
         e.preventDefault();
         
        //Tengo que tomar el id del td padre para que el boton sea funcional a todas las filas
         var id = (parseInt($(this).closest('td').attr('id')));

         //borro el objeto con el indice == al id
         if (id == 2){
             carrito.splice(carrito.length -1 , 1)
         }else{
             carrito.splice(id, 1)
         }

         //reasigno los ID para cada objeto para que se mantengan igual al ID
         carrito.forEach( item => {
            item.id = carrito.indexOf(item)
         });

         //Limpio el campo de calculo total
         $("#resultadoTotal").val(0);

         //Llamo a mostrar carrito para que muestre el array de items sin los eliminados
         mostrarCarrito();
     });


    $("#limpiarFormulario").click(function (e) { 
        e.preventDefault();

        $("#1-nuevaFila").remove();
        $("#2-nuevaFila").remove();
        $("#3-nuevaFila").remove();

        $("#tablaSeleccion").addClass('invisible');
        $("#resultadoTotal").val(0);

        carrito = [];
        montoTotal = 0;

        comprobarCarrito();
        
    });


    function comprobarCarrito(){
        //funcion que esconde tablas/formularios si no hay nada en el carro

        if (carrito.length > 0) {
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