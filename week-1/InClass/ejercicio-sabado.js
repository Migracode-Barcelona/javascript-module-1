function resumen(texto) {
    return texto.substring(0, 9);
}

const resultadoTexto = resumen("Hola este es un texto de prueba");

console.log(resultadoTexto.slice(0,9)); // Recibimos el resultado: Hola este

/*
console.log("hola esta es una prueba del slice".slice(1,3)); // printa ol
console.log("hola esta es una prueba del slice".substring(1,3)); // printa ol -- igual al .slice
console.log("hola esta es una prueba del slice".slice(0,9)); // printa hola esta
console.log("hola esta es una prueba del slice".substring(0,9)); // printa hol a esta --igual al .slice

*/

// Second exercise

function firstCapitalize(text){
    const firstChar = text.charAt(0);
    const firstCharCapitalize = firstChar.toUpperCase();
    return firstCharCapitalize + text.slice(1);
}

const resultadoEjercicioDos = firstCapitalize("mi mensagen bien escrito");

console.log(resultadoEjercicioDos);