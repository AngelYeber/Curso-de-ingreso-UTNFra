function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
switch (mesDelAnio){

    case "Noviembre":
    case "Abril":
    case "Junio":
    case "Septiembre":
        
        alert("Este mes termina en 30");
        break;
    case "Febrero":

        alert("No tiene más de 29 días");
        break;
    default:

        alert("Este mes termina en 31");

}

}//FIN DE LA FUNCIÓN