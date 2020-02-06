/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var valor1
    var resultado
    var porcentaje

    valor1=document.getElementById("importe").value;
    valor1=parseInt(valor1);
    
    porcentaje= valor1/-100*25;

    resultado= valor1-porcentaje;

    document.getElementById("resultado").value=resultado;


}
