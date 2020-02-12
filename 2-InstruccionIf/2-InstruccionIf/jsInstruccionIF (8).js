function mostrar()
{
//tomo la edad  

    var edad
    var cs

        edad=document.getElementById("edad").value;
        cs=document.getElementById("estadoCivil").value;

    /*if (edad > 18 && cs!= "Casado" && cs != "Divorciado")
    {
        alert("Es soltero y no es menor.");

    }*/    // Esta linea de código hace lo mismo pero es +++larga
    if (edad >= 18 && cs == "Soltero")
    {
        alert("Es soltero y no es menor.");
    }
     


}//FIN DE LA FUNCIÓN