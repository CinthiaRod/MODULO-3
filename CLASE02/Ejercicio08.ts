// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura ("circulo" o "rectangulo") 
// y luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo).
//  Usa tipos específicos para cada caso.
function calcularArea(figura: "circulo", radio: number): number; 
function calcularArea(figura: "rectangulo", largo: number, ancho: number): number;
function calcularArea(figura: string, ...args: number[]): number {

//  La función debe retornar el área de la figura.
    if (figura === "circulo") {  //Condición para el calculo en caso de Circulo
        const radio = args[0];
        return Math.PI * radio * radio;
    } else if (figura === "rectangulo") { //Condición para el calculo en caso de rectangulo
        const largo = args[0];
        const ancho = args[1];
        return largo * ancho;
    } else { //En caso de alguna otra opción se tendrá el siguiente mensaje de error
        throw new Error("Tipo de figura no válido. Debe ser 'circulo' o 'rectangulo'.");
    }
};

// Imprimiendo en consola
console.log("El área de un circulo con un radio de 5 es:", calcularArea("circulo", 5)); 
console.log("El área de un rectangulo de 4x6 es:", calcularArea("rectangulo", 4, 6)); 

