// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método preparar(). 
//Implementa esta interfaz en dos clases: Cafe y Te.
// Usa abstracción para que ambas bebidas oculten su lógica de preparación interna pero expongan un comportamiento común.
interface Bebida {
    nombre: string; 
    preparar(): void; // Método abstracto en la interfaz (implícito)
  };
  
  class Cafe implements Bebida {
    public nombre: string;
    private tipoGrano: string;
    private cantidadAgua: number;
    private tiempoInfusion: number;
  
    constructor(nombre: string, tipoGrano: string, cantidadAgua: number, tiempoInfusion: number) {
      this.nombre = nombre;
      this.tipoGrano = tipoGrano;
      this.cantidadAgua = cantidadAgua;
      this.tiempoInfusion = tiempoInfusion;
    };
  
    preparar(): void {
      console.log(`Preparando el café ${this.nombre}:`);
      console.log(`Moliendo granos de ${this.tipoGrano}.`);
      console.log(`Calentando ${this.cantidadAgua} ml de agua.`);
      console.log(`Infusionando el café ${this.tiempoInfusion} segundos.`);
      console.log("El café caliente esta listo.");
    };
  };
  
  class Te implements Bebida {
    public nombre: string;
    private tipoHoja: string;
    private temperaturaAgua: number;
    private tiempoInfusion: number;
  
    constructor(nombre: string, tipoHoja: string, temperaturaAgua: number, tiempoInfusion: number) {
      this.nombre = nombre;
      this.tipoHoja = tipoHoja;
      this.temperaturaAgua = temperaturaAgua;
      this.tiempoInfusion = tiempoInfusion;
    ;}
  
    preparar(): void {
      console.log(`Preparando una taza de té ${this.nombre}:`);
      console.log(`Seleccionando hojas de té ${this.tipoHoja}.`);
      console.log(`Calentando agua a ${this.temperaturaAgua}°C.`);
      console.log(`Infusionando el té ${this.tiempoInfusion} minutos.`);
      console.log("El té caliente esta listo.");
    };
  };
