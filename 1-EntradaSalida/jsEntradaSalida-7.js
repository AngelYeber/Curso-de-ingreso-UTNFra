/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var valor1;
    var valor2;
    var result;


    valor1=document.getElementById("numeroUno").value; 
    valor1=parseInt(valor1);

    valor2=document.getElementById("numeroDos").value;
    valor2=parseInt(valor2);
     
    result= valor1+valor2;

    alert(result);
	
}

function restar()
{
	var valor1
    var valor2

    valor1=document.getElementById("numeroUno").value; 
    valor1=parseInt(valor1);

    valor2=document.getElementById("numeroDos").value;
    valor2=parseInt(valor2);

    alert(valor1-valor2);
}

function multiplicar()
{ var valor1
    var valor2

    valor1=document.getElementById("numeroUno").value; 
    valor1=parseInt(valor1);

    valor2=document.getElementById("numeroDos").value;
    valor2=parseInt(valor2);
   
    alert("el resultado es "+valor1*valor2);
	
}

function dividir()
{
    var valor1
    var valor2

    valor1=document.getElementById("numeroUno").value; 
    valor1=parseInt(valor1);

    valor2=document.getElementById("numeroDos").value;
    valor2=parseInt(valor2);

    alert("el resultado es "+valor1/valor2);
    
	
}

