$(document).ready(function(){
    // Variables para almacenar datos seleccionados
    var cursoSeleccionado, modulosSeleccionados, medioPagoSeleccionado, totalPagar;

    // Paso 1: Curso seleccionado
    $('#siguiente1').click(function(){
        cursoSeleccionado = $('#curso').val();
        $('#paso1').hide();
        $('#paso2').show();
    });

    // Paso 2: Módulos seleccionados
    $('#siguiente2').click(function(){
        modulosSeleccionados = [];
        $('input[type=checkbox]:checked').each(function(){
            modulosSeleccionados.push($(this).val());
        });
        $('#paso2').hide();
        $('#paso3').show();
    });

    // Paso 3: Medio de pago seleccionado
    $('#siguiente3').click(function(){
        medioPagoSeleccionado = $('input[name=medioPago]:checked').val();
        calcularTotalPagar();
        mostrarDetalle();
    });

    // Calcular total a pagar
    function calcularTotalPagar(){
        var costoModulo = 0;
        if(cursoSeleccionado === 'Java'){
            costoModulo = 1200;
        } else if(cursoSeleccionado === 'PHP'){
            costoModulo = 800;
        } else if(cursoSeleccionado === '.NET'){
            costoModulo = 1500;
        }
        var descuento = medioPagoSeleccionado === 'Pago en efectivo' ? 0.1 : 0;
        totalPagar = (costoModulo * modulosSeleccionados.length) * (1 - descuento);
    }

    // Mostrar detalle de la matrícula
    function mostrarDetalle(){
        $('#detalle-curso').text('Curso: ' + cursoSeleccionado);
        $('#detalle-modulos').text('Módulos: ' + modulosSeleccionados.join(', '));
        $('#detalle-medio-pago').text('Medio de pago: ' + medioPagoSeleccionado);
        $('#detalle-total').text('Total a pagar: S/ ' + totalPagar.toFixed(2));
        $('#detalle').show();
    }
});