import createMultiplier from './higherOrderFunctions';

const multiplicadorPorDos = createMultiplier(2);
const result = multiplicadorPorDos(8);
console.log(`El resultado de multiplicar 8 por 2 es: ${result}`);