// Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista) 
// Crea una función genérica que acepte una tupla con dos elementos de cualquier tipo y 
// retorne una nueva tupla con los elementos invertidos.
// Para este ejercicio deben pensar mucho porque es para poner en juego la lógica de programacion
function invertirTupla<A, B>(tupla: [A, B]): [B, A] {
    if (!Array.isArray(tupla) || tupla.length !== 2) {
        throw new Error("La entrada debe ser una tupla con 2 valores dentro del array.");
    };

    const [primerElemento, segundoElemento] = tupla;
    return [segundoElemento, primerElemento];
};
    
//Ejemplo de uso
const tuplaUno: [number, number] = [8, 12];
const tuplaDos: [string, string] = ["hola", "chicas de back"];
const tuplaTres: [boolean, number] = [true, 3];
    
const tuplaInvertidaUno = invertirTupla(tuplaUno);
const tuplaInvertidaDos = invertirTupla(tuplaDos);
const tuplaInvertidaTres = invertirTupla(tuplaTres);
    
console.log(`Tupla 1: ${tuplaUno}, invertida: ${tuplaInvertidaUno}`);
console.log(`Tupla 2: ${tuplaDos}, invertida: ${tuplaInvertidaDos}`);
console.log(`Tupla 3: ${tuplaTres}, invertida: ${tuplaInvertidaTres}`);