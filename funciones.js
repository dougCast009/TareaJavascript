/*Tarea de Javascript*/
/*Creado por Douglas Castillo */

//Ejercicio 1: Sumar 2 numeros
function Sumar() {
    var x, y, suma, text;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    suma = parseInt(num1) + parseInt(num2);
    text = suma;

    document.getElementById("resultadoSuma").innerHTML = "Total: "+text;
}

//Ejercicio 2: Validar si un numero es par
function ValidaPar(){
    var numero, resultado;
    numero = document.getElementById("numero").value;
    if(numero%2==0){
        resultado = "El número "+numero+" es par"
    }else{
        resultado = "El número "+numero+" es impar"
    }
    document.getElementById("resultado").innerHTML = resultado;
}

//Ejercicio 3: Validar si la edad ingresada es mayor de edad
function ValidarEdad(){
    var edad, mensaje
    edad = document.getElementById("edad").value

    if(edad>=18){
        mensaje = "La persona si tiene edad para ingresar al Bar"
    } else {
        mensaje = "La persona no tiene edad para ingresar al Bar"
    }
    document.getElementById("mensajeEdad").innerHTML = mensaje;
}

//Ejercicio 4: Imprimir todos los elementos de un array sin importar la cantidad de elementos de un array
function RecorrerArray(){
    const arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,18,20];
    var valor = "";
    for (var i = 0; i < arrayNumeros.length; i++){
        console.log(arrayNumeros[i])
        valor += arrayNumeros[i] + "<br/>";        
    }
    document.getElementById("valoresArray").innerHTML = valor;
}

//Ejercicio 5: Ordenar los numeros de un array
function OrdenarArray(){
    const arrayNumeros = [7,4,1,8,5,2,9,6,3,20,30,10,18,27,64,35];
    var arrayOrdenado = "";
    arrayOrdenado = arrayNumeros.sort(function(a, b){return a-b});
    document.getElementById("arrayOrdenado").innerHTML = arrayOrdenado;
}