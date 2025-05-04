// Ejercicio 7: Herencia Múltiple Indirecta y Modificadores de Acceso
// Consigna: Define una clase base Negocio con un método protegido operar(). 
class Negocio {
    protected nombreNegocio: string;
  
    constructor(nombre: string) {
      this.nombreNegocio = nombre;
    }
  
    protected operar(): void {
      console.log(`${this.nombreNegocio} está operando actualmente.`);
    };
};

// Define otra clase Consultoria que herede de Negocio y sobrescriba el método operar() 
// para mostrar un mensaje sobre cómo opera el negocio de consultoría.
class Consultoria extends Negocio {
    private especializacion: string;
  
    constructor(nombre: string, area: string) {
      super(nombre);
      this.especializacion = area;
    };
  
    protected operar(): void {
      super.operar();
      console.log(`${this.nombreNegocio} (Consultoría en ${this.especializacion}).`);
    };
  
    public iniciarOperaciones(): void {
      console.log(`Iniciando operaciones en ${this.nombreNegocio}...`);
      this.operar();
    };
};


//Ejemplo de uso
const miNegocio= new Negocio("Empresa de consultoria CRB");
const miConsultoria = new Consultoria("Back Consulting", "Desarrollo web");
miConsultoria.iniciarOperaciones();
 //miConsultoria.operar(); //Arrojará error porque es protegido