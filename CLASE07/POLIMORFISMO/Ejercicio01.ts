// Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
// Implementa una clase Calculadora que tenga un método sumar. El método debe estar sobrecargado para permitir la suma de:
class Calculadora{
    // Dos números enteros.
    sumar (a: number, b: number): number;
    // Tres números enteros.
    sumar (a:number, b:number, c:number): number;
    // Dos cadenas, concatenando las dos cadenas
    sumar(a: string, b: string): string;

    sumar(a: number, b: number): number;
    sumar(a: number, b: number, c: number): number;
    sumar(a: string, b: string): string;
    sumar(a: number | string, b: number | string, c?: number): number | string | null {
      if (typeof a === "number" && typeof b === "number") {
        if (c !== undefined) {
          return a + b + c;
        };
        return a + b;
      };
  
      if (typeof a === "string" && typeof b === "string") {
        return a + b;
      };
  
      return null;
    };
  };

//Ejemplo de uso
const calculadora = new Calculadora();
console.log("El resultado de la primera uma es: ", calculadora.sumar(8, 4));
console.log("El resultado de la segunda suma es: ", calculadora.sumar(2, 4, 2));
console.log(calculadora.sumar("Mi nombre es ", "Cinthia"));