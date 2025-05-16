// 5. Banco: Transferencias Programadas
// Crea un sistema para gestionar cuentas bancarias en un banco. 
// Cada cuenta debe tener un nombre del propietario, un saldo y un estado (activo o inactivo). 
interface CuentaBancaria {
    propietario: string;
    saldo: number;
    estado: 'activo' | 'inactivo';
    id: number;
  };
  class Banco {
    private cuentas: CuentaBancaria[] = [];
    private id: number = 1;

// Implementa las siguientes funciones:
// Añadir una cuenta.
añadirCuenta(propietario: string, saldoInicial: number = 0): number {
    const nuevaCuenta: CuentaBancaria = {
      propietario,
      saldo: saldoInicial,
      estado: 'activo',
      id: this.id++,
    };
    this.cuentas.push(nuevaCuenta);
    console.log(`Cuenta para ${propietario} (ID: ${nuevaCuenta.id}) creada.`);
    return nuevaCuenta.id;
  };

// Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando setTimeout().
realizarTransferencia(idCuentaOrigen: number, idCuentaDestino: number, monto: number): void {
    console.log(`\nProcesando la transferencia de $${monto} desde la cuenta ${idCuentaOrigen} a la cuenta ${idCuentaDestino}...`);

    setTimeout(() => {
      const cuentaOrigen = this.cuentas.find((cuenta) => cuenta.id === idCuentaOrigen);
      const cuentaDestino = this.cuentas.find((cuenta) => cuenta.id === idCuentaDestino);

      if (!cuentaOrigen) {
        console.error(`No se encontró la cuenta de origen.`);
        return;
      };

      if (!cuentaDestino) {
        console.error(`No se encontró la cuenta de destino.`);
        return;
      };

      if (cuentaOrigen.estado !== 'activo') {
        console.error(`La cuenta de origen (ID: ${idCuentaOrigen}) está inactiva.`);
        return;
      };

      if (cuentaDestino.estado !== 'activo') {
        console.error(`La cuenta de destino (ID: ${idCuentaDestino}) está inactiva.`);
        return;
      };

      if (cuentaOrigen.saldo >= monto) {
        cuentaOrigen.saldo -= monto;
        cuentaDestino.saldo += monto;
        console.log(`Transferencia exitosa: $${monto} transferidos desde la cuenta ${idCuentaOrigen} a la cuenta ${idCuentaDestino}.`);
        console.log(`Nuevo saldo de la cuenta ${idCuentaOrigen}: $${cuentaOrigen.saldo}`);
        console.log(`Nuevo saldo de la cuenta ${idCuentaDestino}: $${cuentaDestino.saldo}`);
      } else {
        console.error(`Saldo insuficiente en la cuenta de origen (ID: ${idCuentaOrigen}) para realizar la transferencia.`);
      };
    }, 8000); 
  };

// Mostrar todas las cuentas.
mostrarTodasLasCuentas(): void {
    if (this.cuentas.length > 0) {
      console.log("\n--- Cuentas Bancarias ---");
      this.cuentas.forEach((cuenta) => {
        console.log(`ID: ${cuenta.id}, Propietario: ${cuenta.propietario}, Saldo: $${cuenta.saldo}, Estado: ${cuenta.estado}`);
      });
    } else {
      console.log("\nNo hay cuentas bancarias registradas.\n");
    };
  };
};

//Ejemplo de uso
const miBanco = new Banco();

const cuentaUno = miBanco.añadirCuenta("Cinthia Rodriguez", 800);
const cuentaDos = miBanco.añadirCuenta("Felipe Samaniego", 1900);
const cuentaTres = miBanco.añadirCuenta("Jayden López", 300);

miBanco.mostrarTodasLasCuentas();
miBanco.realizarTransferencia(cuentaUno, cuentaDos, 200);
miBanco.realizarTransferencia(cuentaTres, cuentaUno, 800);
miBanco.mostrarTodasLasCuentas();