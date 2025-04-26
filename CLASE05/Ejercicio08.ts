// Ejercicio 8: Integramos contenidos - Animales
// 1.Crea un pequeño sistema de gestión de Animales que incluya las clases Animal, Mascota, y MascotaExotica.
//La clase Animal debe tener propiedades como nombre y tipo.
class animal {
  public nombre: string;
  public tipo: string;
  constructor(nombre: string, tipo: string) {
    this.nombre = nombre;
    this.tipo = tipo;
  };
  public mostrarInformacion(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Tipo: ${this.tipo}`);
  };
  public hacerSonido(): void {
    console.log("Sonido del animal");
  };
};


//La clase Mascota debe extender Animal e incluir una propiedad para dueño.
class mascota extends animal {
  public dueño: string;
  constructor(nombre: string, tipo: string, dueño: string) {
    super(nombre, tipo); 
    this.dueño = dueño;
  };
  public mostrarInformacion(): void {
    super.mostrarInformacion(); 
    console.log(`Dueño: ${this.dueño}`);
  };
  public hacerSonido(): void {
    console.log(`${this.nombre} hace un sonido amigable.`);
  };
};

//La clase MascotaExotica debe extender Animal e incluir una propiedad para habitat.
class mascotaExotica extends animal {
  public habitat: string;
  constructor(nombre: string, tipo: string, habitat: string) {
    super(nombre, tipo); 
    this.habitat = habitat;
  };
  public mostrarInformacion(): void {
    super.mostrarInformacion(); 
    console.log(`Hábitat: ${this.habitat}`);
  };
  public hacerSonido(): void {
    console.log(`${this.nombre} emite un sonido exótico.`);
  };
};

// 2.Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.
console.log("--- Animal---");
const animalUno= new animal("Desconocido", "Carnivoro");
animalUno.mostrarInformacion();
animalUno.hacerSonido();

console.log("\n--- Mascota ---");
const miMascota = new mascota("Coco", "Perro", "Cinthia");
miMascota.mostrarInformacion();
miMascota.hacerSonido();

console.log("\n--- Mascota Exótica ---");
const mascotaE = new mascotaExotica("Jah", "León", "Sabana");
mascotaE.mostrarInformacion();
mascotaE.hacerSonido();