function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAnio);
	
switch (mesDelAnio){

    case "Noviembre":
    case "Abril":
    case "Junio":
    case "septiembre":
        
        alert("Este mes termina en 30");
        break;
    case "Febrero":

        alert("Este mes termina en 29");
        break;
    default:

        alert("Este mes termina en 31");

     



}//FIN DE LA FUNCIÓN