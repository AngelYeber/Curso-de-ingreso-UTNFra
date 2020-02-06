/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var valor1
  
  valor1=document.getElementById("sueldo").value;
  valor1=parseInt(valor1);
  
  document.getElementById("resultado").value=valor1*10/100;
  

}
