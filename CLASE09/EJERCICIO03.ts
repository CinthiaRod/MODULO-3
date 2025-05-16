// 3. Compañía de Seguros: Renovación Automática de Pólizas
// Desarrolla un sistema que gestione las pólizas de seguros de una compañía. 
// Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y una fecha de renovación. 
interface Poliza {
  id: number;
  nombreCliente: string;
  montoAsegurado: number;
  fechaRenovacion: Date;
  activa: boolean;
};

class controlDePolizas {
  private polizas: Poliza[] = [];
  private id: number = 1;

// Implementa las siguientes funciones:
// Añadir una póliza.
añadirPoliza(nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date): void {
    const nuevaPoliza: Poliza = {
      id: this.id++,
      nombreCliente,
      montoAsegurado,
      fechaRenovacion,
      activa: true,
    };
    this.polizas.push(nuevaPoliza);
    this.programarRenovacion(nuevaPoliza);
    console.log(`Póliza ${nuevaPoliza.id} añadida.`);
  };

// Programar la renovación de la póliza utilizando setTimeout().
private programarRenovacion(poliza: Poliza): void {
    const tiempoHastaRenovacion = poliza.fechaRenovacion.getTime() - Date.now();

    if (tiempoHastaRenovacion > 0) {
      setTimeout(() => {
        this.renovarPoliza(poliza.id);
      }, tiempoHastaRenovacion);
      console.log(`Renovación de la póliza ${poliza.id} programada.}.`);
    } else {
      this.renovarPoliza(poliza.id); 
    };
  };

  private renovarPoliza(idPoliza: number): void {
    const poliza = this.polizas.find((p) => p.id === idPoliza);
    if (poliza && poliza.activa) {
      const nuevaFechaRenovacion = new Date();
      nuevaFechaRenovacion.setFullYear(nuevaFechaRenovacion.getFullYear() + 1); 
      poliza.fechaRenovacion = nuevaFechaRenovacion;
      console.log(`Póliza ${poliza.id} de ${poliza.nombreCliente} renovada. Nueva fecha de renovación: ${nuevaFechaRenovacion.toLocaleDateString()}.`);
      this.programarRenovacion(poliza); 
    } else if (poliza && !poliza.activa) {
      console.log(`La póliza ${idPoliza} está inactiva, no se puede renovar.`);
    } else {
      console.log(`No se encontró la póliza ${idPoliza}.`);
    };
};

// Mostrar todas las pólizas activas.
mostrarPolizasActivas(): void {
    const polizasActivas = this.polizas.filter((poliza) => poliza.activa);
    if (polizasActivas.length > 0) {
      console.log("\n--- Pólizas Activas ---");
      polizasActivas.forEach((poliza) => {
        console.log(`ID: ${poliza.id}, Cliente: ${poliza.nombreCliente}, Monto: $${poliza.montoAsegurado}, Renovación: ${poliza.fechaRenovacion.toLocaleDateString()}`);
      });
    } else {
      console.log("\nNo hay pólizas activas.\n");
    };
  };
};


//Ejemplo de uso
// const miGestor = new controlDePolizas();
// const fechaRenovacionUno = new Date();
// fechaRenovacionUno.setDate(fechaRenovacionUno.getDate() + 10); 
// miGestor.añadirPoliza("Margarita", 10001, fechaRenovacionUno);

// const fechaRenovacionDos = new Date(2025, 7, 28);
// miGestor.añadirPoliza("Rafael", 10004, fechaRenovacionDos);

// const fechaRenovacionTres = new Date();
// fechaRenovacionTres.setDate(fechaRenovacionTres.getDate() - 1);
// miGestor.añadirPoliza("Felipe", 10008, fechaRenovacionTres);


// miGestor.mostrarPolizasActivas();