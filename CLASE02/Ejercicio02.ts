/* Ejercicio 2: Uso de funciones con parámetros opcionales
Consigna: Define una función llamada saludar que acepte un parámetro nombre de tipo string y otro opcional saludo de tipo string.*/
function saludar(nombre: string, saludo = "Hola"): string { //Si el parámetro saludo no es proporcionado, la función debe usar "Hola" por defecto.
return `${saludo}, ${nombre}`;
};
// Retorna el saludo y muestra el resultado en la consola. 
console.log(saludar("Rafael"));
console.log(saludar("Felipe", "Buenas tardes"));
