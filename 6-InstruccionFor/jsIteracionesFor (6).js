function mostrar()
{
    var contador
    var contadorPares=0;
    var repeticiones=prompt("Ingrese un numero");
    
    for(contador=0;contador<repeticiones;contador++)
    {
        if((contador%2)==0)
        {   
            alert("Es par : " + contador);
            contadorPares++; 
        }
    
    }

        alert("Se encontraron: " + contadorPares + " numeros pares ");

}//FIN DE LA FUNCIÓN