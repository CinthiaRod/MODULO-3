// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
// Crea una interfaz PagoOnline con un método procesarPago().
interface PagoOnline {
    procesarPago(): void;
  };

// Crea una clase abstracta Pago con un método concreto validarMonto() y un método abstracto completarPago().
abstract class Pago {
    constructor(protected monto: number) {}
    validarMonto(): boolean {
      return this.monto > 0; //Validamos que el valor del monto sea mayor a cero 
    };
    abstract completarPago(): void;
    };

// Implementa ambas estructuras en una clase concreta PagoConTarjeta.
class PagoConTarjeta extends Pago implements PagoOnline {
    procesarPago(): void {
      console.log(`Procesando pago...`);
    };
    completarPago(): void {
      console.log(`Pago con tarjeta completado correctamente.`);
    };
  };

  //Ejemplo de uso
  const pago = new PagoConTarjeta(600);
  if (pago.validarMonto()) {//Condición para validar el monto antes de procesar y completar el pago, el monto debe ser mayor a 0
    pago.procesarPago(); 
    pago.completarPago();
  };