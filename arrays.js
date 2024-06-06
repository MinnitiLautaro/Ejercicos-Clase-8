//10 - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

//11 - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
months.sort(a,b);
console.log(months);

//12 - Agregar un elemento al principio y al final del array (utilizar unshift y push)
months.unshift("Mes0");
months.push("Mes13");
console.log(months);

//13 - Quitar un elemento del principio y del final del array (utilizar shift y pop)
months.shift();
months.pop();
console.log(months);

//14 - Invertir el orden del array (utilizar reverse)
months.reverse();
console.log(months);

//15 - Unir todos los elementos del array en un solo string donde cada mes este separado por un guion (-) (utilizar join)
let months2 = months.join("-");
console.log(months2);

//16 - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
let months3 = months.slice(4, 11);
console.log(months3);

