// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método preparar(). 
//Implementa esta interfaz en dos clases: Cafe y Te.
// Usa abstracción para que ambas bebidas oculten su lógica de preparación interna pero expongan un comportamiento común.
interface Bebida { 
    preparar(): void; // Método abstracto en la interfaz (implícito)
  };
  
  class Cafe implements Bebida {
    preparar(): void {
      console.log("Preparando el café para el cliente 1...");
      console.log("El café caliente esta listo.");
    };
  };
  
    
  class Te implements Bebida {
    preparar(): void {
      console.log("\nPreparando el té para el cliente 2...");
      console.log("El té caliente esta listo.");
    };
  };

  //Ejemplo de uso
  const cafe = new Cafe ();
  const te = new Te();
cafe.preparar();
te.preparar();