// Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos 
// Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas. 
// Define una clase NaveEspacial con atributos como combustible y capacidadDeCarga. 
interface Recursos {
    oxigeno: number;
    minerales: number;
    agua: number;
  };
  
  type Coordenadas = [number, number]; 
  
  class NaveEspacial {
    combustible: number;
    capacidadDeCarga: number;
    cargaActual: Recursos;
    ubicacionActual: Coordenadas;
  
    constructor(combustibleInicial: number, capacidadCarga: number, ubicacionInicial: Coordenadas) {
      this.combustible = combustibleInicial;
      this.capacidadDeCarga = capacidadCarga;
      this.cargaActual = { oxigeno: 0, minerales: 0, agua: 0 };
      this.ubicacionActual = ubicacionInicial;
    };

// Implementa métodos para viajar entre planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el combustible. 
// Usa tuplas para representar las coordenadas espaciales de los planetas y una interfaz para los tipos de recursos recolectados.
viajar(destino: Coordenadas): void {
    const distancia = Math.abs(destino[0] - this.ubicacionActual[0]) + Math.abs(destino[1] - this.ubicacionActual[1]);
    if (this.combustible < distancia) {
      throw new Error("¡Sin combustible!");
    };
    this.combustible -= distancia;
    this.ubicacionActual = destino;
    console.log(`Viajó a [${destino.join(', ')}]. Combustible: ${this.combustible}`);
  };
  recolectar(planeta: string, recursos: Recursos): void {
    const cargaTotal = this.cargaActual.oxigeno + this.cargaActual.minerales + this.cargaActual.agua;
    const nuevosRecursos = recursos.oxigeno + recursos.minerales + recursos.agua;
    if (cargaTotal + nuevosRecursos > this.capacidadDeCarga) {
      throw new Error("Carga máxima alcanzada, sin espacio para almacenar más recursos.");
    };
    this.cargaActual.oxigeno += recursos.oxigeno;
    this.cargaActual.minerales += recursos.minerales;
    this.cargaActual.agua += recursos.agua;
    console.log(`Recolección en ${planeta}. Carga actual:`, this.cargaActual);
  };

  recargaCombustible(cantidad: number): void {
    this.combustible += cantidad;
    console.log(`Recargó ${cantidad}. Combustible total: ${this.combustible}`);
  };
};

// Ejemplo de uso
const planetaC: Coordenadas = [28, 7];
const planetaF: Coordenadas = [6, 8];

const miNave = new NaveEspacial(100, 150, [0, 0]);
console.log("Nave inicial:", miNave);

miNave.viajar(planetaC);
miNave.recolectar("C", { oxigeno: 12, minerales: 3, agua: 18 });
miNave.viajar(planetaF);
miNave.recolectar("F", { oxigeno: 8, minerales: 12, agua: 23 });
miNave.recargaCombustible(20);


console.log("Estado actual de la nave: ", miNave);

