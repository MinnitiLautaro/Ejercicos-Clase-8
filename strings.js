//4 - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
let x1 = "ornitorrincos";
x1 = x1.toUpperCase();
console.log(x1);

//5 - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
let x2 = "ornitorrincos";
y2 = x2.substring(0, 5);
console.log(x2);

//6 - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
let x3 = "ornitorrincos";
y3 = x3.substring(x3.length - 3);
console.log(y3);

//7 - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
let x4 = "oRNITORRINCOS";
z4 = x4.substring(1);
y4 = x4.substring(0,1);
console.log(y4.toUpperCase() + z4.toLowerCase());

//8 - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
let x5 = "ornito rrincos";
y5 = x5.indexOf(" ");
console.log(y5);

//9 - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
let x6 = "ornitorrincos balisticos";
y6 = x6.indexOf(" ");
z6 = x6.substring(0,1);
zz6 = x6.substring(1,y6);
a6 = x6.substring(y6 + 1, y6 + 2);
aa6 = x6.substring(y6+2);
console.log(z6.toUpperCase() + zz6.toLowerCase() + " " + a6.toUpperCase() + aa6.toLowerCase());