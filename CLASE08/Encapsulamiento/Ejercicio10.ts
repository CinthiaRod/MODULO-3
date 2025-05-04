// Ejercicio 10: Sistema de Gestión de Empleados
// Consigna: Crea una clase base Empleado con propiedades protegidas nombre y salario, y un método calcularSalario().
class Empleado {  
    constructor(protected nombre: string, protected salario: number) {
      this.nombre = nombre;
      this.salario = salario;
    };
  
    calcularSalario(): number {
      return this.salario;
    };
  
    obtenerNombre(): string {
      return this.nombre;
    };
};

// Además, crea una interfaz BeneficiosLaborales que tenga el método calcularBeneficios(). 
// Solo los empleados de tiempo completo implementarán esta interfaz.
interface BeneficiosLaborales {
    calcularBeneficios(): number;
};

// Crea dos clases derivadas EmpleadoTiempoCompleto y EmpleadoMedioTiempo.
// Ambas clases deben sobrescribir el método calcularSalario() con sus propias lógicas 
// (empleados de tiempo completo tienen un salario fijo, mientras que los empleados de medio tiempo cobran por hora).
class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    private bonoFijo: number;
  
    constructor(nombre: string, salario: number, bonoFijo: number) {
      super(nombre, salario);
      this.bonoFijo = bonoFijo;
    };
  
    calcularSalario(): number {
      return this.salario + this.bonoFijo;
    };
  
    calcularBeneficios(): number {
      return this.calcularSalario() * 0.20; // Beneficio del 20% con base a su salario
    };
};
  
class EmpleadoMedioTiempo extends Empleado {
    private horasTrabajadas: number;
    private tarifaPorHora: number;
  
    constructor(nombre: string, horasTrabajadas: number, tarifaPorHora: number) {
      super(nombre, 0); // El salario base es 0, se calcula con las horas y la tarifa
      this.horasTrabajadas = horasTrabajadas;
      this.tarifaPorHora = tarifaPorHora;
    };
  
    calcularSalario(): number {
      return this.horasTrabajadas * this.tarifaPorHora;
    };
};

//Ejemplo de uso
const empleadoTCompleto = new EmpleadoTiempoCompleto("Rafael Rodriguez", 4000, 350);
const empleadoMTiempo = new EmpleadoMedioTiempo("Jayden López", 4, 50)
console.log(`Salario de ${empleadoTCompleto.obtenerNombre()}: $${empleadoTCompleto.calcularSalario()}`);
console.log(`Beneficios de ${empleadoTCompleto.obtenerNombre()}: $${empleadoTCompleto.calcularBeneficios()}`);
console.log(`Salario de ${empleadoMTiempo.obtenerNombre()}: $${empleadoMTiempo.calcularSalario()}`);

  

