// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto empleado con las propiedades nombre (string) y salario (number)
// ,y un número que represente el porcentaje de aumento. 
function aumentarSalario(empleado: { nombre: string; salario: number }, porcentajeAumento: number): number{
// La función debe aumentar el salario del empleado y devolver el nuevo salario. 
empleado.salario += empleado.salario * (porcentajeAumento / 100);
return empleado.salario;
};
// Muestra en la consola el resultado.
const empleado = {
    nombre: "Rafael Rodriguez",
    salario: 30000
};
console.log(`El nuevo salario de ${empleado.nombre} considerando el aumento es:`, aumentarSalario(empleado, 10)); //Aumentamos  10% por ejemplo