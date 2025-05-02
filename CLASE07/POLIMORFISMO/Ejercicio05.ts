// Ejercicio 5: Uso de Interfaces para Polimorfismo
// Crea una interfaz Empleado con un método trabajar.
interface Empleado {
    nombre: string;
    trabajar(): void;
  };

// Implementa esta interfaz en clases Programador y Disenador, donde cada clase debe implementar el método con su propia lógica.
class Programador implements Empleado {
    public nombre: string;
    private lenguajePrincipal: string;
  
    constructor(nombre: string, lenguaje: string) {
      this.nombre = nombre;
      this.lenguajePrincipal = lenguaje;
    };
  
    trabajar(): void {
      console.log(`${this.nombre} está programando en ${this.lenguajePrincipal}.`);
    };
  };
  
  class Disenador implements Empleado {
    public nombre: string;
    private herramientaPrincipal: string;
  
    constructor(nombre: string, herramienta: string) {
      this.nombre = nombre;
      this.herramientaPrincipal = herramienta;
    };
  
    trabajar(): void {
      console.log(`${this.nombre} está diseñando con ${this.herramientaPrincipal}.`);
    };
  };

// Luego, crea una función que reciba un objeto de tipo Empleado y llame a su método trabajar.
function hacerTrabajar(empleado: Empleado): void {
    console.log(`\nHaciendo trabajar a ${empleado.nombre}.`);
    empleado.trabajar();
  };


// Ejemplo de uso
const empleadoUno = new Programador("Cinthia", "TypeScript");
const empleadoDos = new Disenador("Rafael", "Adobe XD");
hacerTrabajar(empleadoUno);
hacerTrabajar(empleadoDos);