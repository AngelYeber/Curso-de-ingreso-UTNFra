function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var num;
	num=Math.round(Math.random()* (10-1)) + 1;
	if (num>=9)
	{
					alert("Excelente "+ num);
	}else
	{
		if(num>=4)
		{
					alert("Aprobó "+ num);

		}else 
			
		{
					alert("Vamos, la próxima se puede. "+ num)
		}
	
	}
	
	
	// ESTE CODIGO ES MÁS LARGO, PERO HACE EXACTAMENTE LO MISMO
	
	/*if(num>=4 && num<=8)
	{
		alert("Aprobó "+ num);
	} 
	if(num<4)
	{
		alert("Vamos, la próxima se puede "+ num);
	}*/

		 
	
	
	
}//FIN DE LA FUNCIÓN