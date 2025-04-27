// Ejercicio 5: Herencia con Modificadores de Acceso
// Consigna: Crea una clase base Compania con un atributo privado nombreCompania y un atributo protegido ingresosAnuales. 
class Compania {
    private nombreCompania: string;
    protected ingresosAnuales: number;
  
    constructor(nombre: string, ingresos: number) {
      this.nombreCompania = nombre;
      this.ingresosAnuales = ingresos;
    };
  };

// Crea una clase derivada EmpresaTecnologia que use el atributo protegido y agregue un método que calcule el doble de los ingresos anuales.
class EmpresaTecnologia extends Compania {
    constructor(nombre: string, ingresos: number) {
      super(nombre, ingresos);
    }
  
    public calcularDobleIngresos(): number {
      return this.ingresosAnuales * 2;
    }
  
    public mostrarInformacionEmpresa(): void {
      console.log(`Doble de los ingresos anuales: $${this.calcularDobleIngresos()}`);
    };
  };

