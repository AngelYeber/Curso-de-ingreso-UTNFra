function mostrar()
{
    var i;
    var num=prompt("Ingrese un numero");
    var contdiv=0;
    var cantdiv;

        for(i=0;i<=num;i++)
        {
            if((num%i)==0)
            {
                alert("Es divisor: " + i);
                contdiv++;
            }
        
        }

            alert("Se entontraron " + contdiv + " numeros divisibles");



}//FIN DE LA FUNCIÓN