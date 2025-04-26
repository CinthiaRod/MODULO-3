// Ejercicio 4: Clases y Objetos
// Define una clase llamada Animal con propiedades nombre y tipo, 
class Animal {
    public nombre: string;
    public tipo: string;
  
    constructor(nombre: string, tipo: string) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
    // y un método hacerSonido().
    public hacerSonido(): void {
      console.log("'Sonido del animal'");
    }
  }
  
  // 2. Crea una instancia de la clase Animal y llama al método.
  const nuevoAnimal = new Animal("Coco", "Perro");
  console.log(nuevoAnimal);
  
  nuevoAnimal.hacerSonido();