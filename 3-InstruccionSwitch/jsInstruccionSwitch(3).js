function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAno);

    switch (mesDelAnio){
        case "Febrero":
            alert("Este mes tiene 29 días");
            break;
        default:
            alert("Este mes tiene más de 30 días");
            break;   
        }

	
	


}//FIN DE LA FUNCIÓN