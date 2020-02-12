function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAnio);

switch(mesDelAnio){
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Ya pasamos el frío, ahora calor!!");
        break;
    case "Enero":
    case "Febrero":          
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;
    case "Julio":
    case "Agosto":
        break;

}




}//FIN DE LA FUNCIÓN