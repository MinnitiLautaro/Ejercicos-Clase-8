//23 - Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
let suma = function (x, y) {
    return x + y
}
console.log(suma(3, 1));

//24 - A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
let suma2 = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert("Uno de los parámetros tiene error")
        return NaN
    } else {
        return x + y
    }
}
console.log(suma2(3, 1));
console.log(suma2("hola", "1"));

//25 - Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
let validateInteger = function (x) {
    return Number.isInteger(x)
}
console.log(validateInteger(3));
console.log(validateInteger("hola"));
console.log(validateInteger(3.5));

//26 - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

let validateInteger2 = function (x) {
    if(Number.isInteger(x)) {
        return x
    } else{
        alert("Uno de los parámetros tiene decimales");
        return Math.round(x);
    }
}

console.log(validateInteger2(3));
console.log(validateInteger2("hola"));
console.log(validateInteger2(3.5));

//27 - Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

let suma3 = function (x, y) {

    if (isNaN(x) || isNaN(y)) {
        alert("Uno de los parámetros tiene error")
        return NaN
    } else {
        return validateInteger2(x) + validateInteger2(y)
    }
}