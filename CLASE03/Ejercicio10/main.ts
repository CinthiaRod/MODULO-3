import { add, subtract } from "../Ejercicio01/mathUtils";
import { capitalize, reverse } from "../Ejercicio02/stringUtils";
import createUser from "../Ejercicio03/user";

// utiliza las funciones en un solo flujo de trabajo, mostrando todos los resultados en la consola
const newUser = createUser("cinthia", 28); // Utilizamos la función del archivo user.ts para crear un nuevo usuario
console.log("Nuevo usuario creado:", newUser);

const capitalizedName = capitalize(newUser.name); //Usamos la función capitalize para capitalizar el nombre del usuario registrado
console.log("\nNombre del nuevo usuario capitalizado:", capitalizedName);

const reversedCapitalized = reverse(capitalizedName); //Usamos la función reverse sobre el string capitalizado anteriormente
console.log("\nNombre capitalizado invertido:", reversedCapitalized);

const sumResult = add(6, 10); // Utilizamos la función para sumar dos números
console.log("\nLa suma de 6 y 10 es:", sumResult);

const subtractionResult = subtract(newUser.age, sumResult);
console.log(`Si a la edad del usuario (${newUser.age}) le restamos ${sumResult} el resultado es:`, subtractionResult);
