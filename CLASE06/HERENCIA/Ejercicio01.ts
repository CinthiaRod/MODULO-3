// Ejercicio 1: Herencia Simple Consigna: 
// Define una clase base Torta que tenga propiedades generales como nombre y tipo, y un método hacerDescripcion() que devuelva una descripción general de la torta.
class Torta {
    public nombre: string;
    public tipo: string;
  
    constructor(nombre: string, tipo: string) {
      this.nombre = nombre;
      this.tipo = tipo;
    };
  
    public hacerDescripcion(): string {
      return `Soy una torta llamada ${this.nombre} y soy de tipo ${this.tipo}.`;
    };
  };

//  Luego, crea una clase derivada TortaDeChocolate que extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva "Soy una torta de chocolate, deliciosa y suave."
class TortaDeChocolate extends Torta {
    constructor(nombre: string) {
      super(nombre, "chocolate"); // Llama al constructor de la clase base con el tipo "chocolate"
    }
  
    public hacerDescripcion(): string {
      return "Soy una torta de chocolate, deliciosa y suave.";
    };
  };

  //Ejemplo de uso
  const tortaUno= new Torta("Vainilla", "esponjosa");
console.log(tortaUno.hacerDescripcion());

const tortaChocolate = new TortaDeChocolate("Dark special");
console.log(tortaChocolate.hacerDescripcion(), `Mi nombre es "${tortaChocolate.nombre}"`);