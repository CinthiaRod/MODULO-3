// Ejercicio 4: Herencia de Métodos y Sobrescritura
// Consigna: Define una clase base Flor con el método describir(), que imprime un mensaje general sobre la flor. 
class Flor {
    describir(): void{
        console.log("La flor tiene un aroma dulce.");
    };
};

// Luego, crea dos clases derivadas Rosa y Girasol, cada una sobrescribiendo el método describir() con un mensaje específico.
class Rosa extends Flor {
    describir(): void {
      console.log("La rosa tiene espinas, las rojas son las más populares.");
    };
  };
  
  class Girasol extends Flor {
    describir(): void {
      console.log("El girasol es grande y resalta por su color amarillo brillante.");
    };
  };