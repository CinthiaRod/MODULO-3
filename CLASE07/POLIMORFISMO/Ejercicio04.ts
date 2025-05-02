// Ejercicio 4: Abstracción con Clases Abstractas
// Implementa una clase abstracta DispositivoElectronico con métodos abstractos encender y apagar. 
abstract class DispositivoElectronico {
    public marca: string;
    public modelo: string;
    protected estaEncendido: boolean = false;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    };
  
    abstract encender(): void;
    abstract apagar(): void;
    };

// Crea dos clases concretas Televisor y Radio, que sobrescriban estos métodos.
class Televisor extends DispositivoElectronico {  
    constructor(marca: string, modelo: string) {
      super(marca, modelo);
    };
  
    encender(): void {
      this.estaEncendido = true;
      console.log(`El televisor ${this.marca} ${this.modelo} se ha encendido.`);
    };
  
    apagar(): void {
      this.estaEncendido = false;
      console.log(`El televisor ${this.marca} ${this.modelo} se ha apagado.`);
    };
};
class Radio extends DispositivoElectronico {  
    constructor(marca: string, modelo: string) {
      super(marca, modelo);
    };
  
    encender(): void {
      this.estaEncendido = true;
      console.log(`La radio ${this.marca} ${this.modelo} se ha encendido.`);
    };
  
    apagar(): void {
      this.estaEncendido = false;
      console.log(`La radio ${this.marca} ${this.modelo} se ha apagado.`);
    };
};

//Ejemplo de uso
const televisor = new Televisor("LG", "65QNED80TUC")
televisor.encender()
televisor.apagar()
const radio = new Radio("Sony", "ICF-P27")
radio.encender()
radio.apagar()