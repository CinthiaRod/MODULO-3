// Ejercicio 8: Sistema de Reserva de Hotel
// Consigna: Crea un sistema para gestionar las reservas de un hotel. 
// Define una clase base Cliente con propiedades privadas como nombre, numeroHabitacion, y un método reservar().
class Cliente {
    private nombre: string;
    private numeroHabitacion: number;
  
    constructor(nombre: string, numeroHabitacion: number) {
      this.nombre = nombre;
      this.numeroHabitacion = numeroHabitacion;
    };
  
    public getNombre(): string {
      return this.nombre;
    };
  
    public getNumeroHabitacion(): number {
      return this.numeroHabitacion;
    };
  
    protected reservar(): void {
      console.log(`\n${this.nombre} ha reservado la habitación número ${this.numeroHabitacion}.`);
    };
  };

//  Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios(). 
// Ambas clases derivadas deben implementar esta interfaz.
interface Beneficios {
    accederBeneficios(): void;
  };

// Luego, crea dos clases derivadas ClientePremium y ClienteCorporativo que sobrescriban el método reservar() para añadir funcionalidades adicionales.
/// En la clase ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase ClienteCorporativo, 
// el cliente podrá acceder a salas de reuniones y descuentos.

class ClientePremium extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number) {
      super(nombre, numeroHabitacion);
    }
  
    reservar(): void {
      super.reservar();
      console.log(`\n${this.getNombre()} su habitación fue reservada correctamente.`);
    };
  
    accederBeneficios(): void {
      console.log(`Accedió a los beneficios Premium: spa y desayuno.`);
    };
  };
  
  class ClienteCorporativo extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number) {
      super(nombre, numeroHabitacion);
    };
  
    reservar(): void {
      super.reservar();
      console.log(`\n${this.getNombre()} su habitación fue reservada correctamente.`);
    };
  
    accederBeneficios(): void {
      console.log(`Accedió a los beneficios Corporativos: salas de reuniones y descuentos.`);
    };
  };

//Ejemplo de uso 
const clientePremium = new ClientePremium("Felipe Samaniego", 128);
const clienteCorporativo = new ClienteCorporativo("Rafael Rodriguez", 225);

clientePremium.reservar();
clientePremium.accederBeneficios();

clienteCorporativo.reservar();
clienteCorporativo.accederBeneficios();




