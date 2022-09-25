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

//Ejercicio 4: Validar si la edad ingresada es mayor de edad