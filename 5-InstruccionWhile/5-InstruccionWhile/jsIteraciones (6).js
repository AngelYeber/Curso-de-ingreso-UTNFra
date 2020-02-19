function mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor=0;

	while(contador<5)
	{
		valor=prompt("Ingrese un número");
		valor=parseInt(valor);
		acumulador=acumulador+valor;        //parseInt(valor); es lo mismo de arriba.
		contador++;
	}
		
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN