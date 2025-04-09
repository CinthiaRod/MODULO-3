// Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva. 
// Prueba la función con diferentes tipos de datos.

function mostrasValores<T>(valor: T): T {
    return valor;
  }
  
//Declaramos difentes tipos de datos
  let numero = 12;
  let frase = "Creando una función genérica";
  let arregloNumeros = [1, 2, 3, 4, 5];
  let estudiaBack = true;
  
console.log(`El valor declarado en la variable número es: ${mostrasValores(numero)}`);
console.log("---------------------------------------------------");
console.log(`La frase es: "${mostrasValores(frase)}"`);
console.log("---------------------------------------------------");
console.log(`El arreglo declarado es: [${mostrasValores(arregloNumeros)}]`);
console.log("---------------------------------------------------");
console.log(`Estudia Back-End: ${mostrasValores(estudiaBack)}`);
