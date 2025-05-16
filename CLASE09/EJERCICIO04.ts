// 4. Redes Sociales: Notificaciones de Amigos
// Implementa un sistema de gestión de amigos en una red social. 
// Cada amigo debe tener un nombre y un estado (en línea o fuera de línea). 
interface Amigo {
    nombre: string;
    enLinea: boolean;
  };
  
  class EstatusAmigos {
    private amigos: Amigo[] = [];
    private intervalosActivos: NodeJS.Timeout[] = [];

// Utiliza un setInterval() para verificar el estado de los amigos cada 5 segundos 
// y enviar una notificación si un amigo se pone en línea.
añadirAmigo(nombre: string, enLinea: boolean = false): void {
    const nuevoAmigo: Amigo = { nombre, enLinea };
    this.amigos.push(nuevoAmigo);
    console.log(`${nombre} ha sido añadido a tu lista de amigos.`);
  };

  actualizarEstadoAmigo(nombre: string, enLinea: boolean): void {
    const amigo = this.amigos.find((amigo) => amigo.nombre === nombre);
    if (amigo) {
      const estabaEnLinea = amigo.enLinea;
      amigo.enLinea = enLinea;
      console.log(`${nombre} ahora está ${enLinea ? 'en línea' : 'fuera de línea'}.`);
      if (!estabaEnLinea && enLinea) {
        this.enviarNotificacionEnLinea(nombre);
      };
    } else {
      console.log(`No se encontró a ningún amigo con el nombre "${nombre}".`);
    };
  };

  private enviarNotificacionEnLinea(nombreAmigo: string): void {
    console.log(`\n¡Notificación! ${nombreAmigo} se ha conectado.\n`);
  };

  verificacionEstado(): void {
    const intervaloId = setInterval(() => {
      this.verificarEstados();
    }, 5000); 
    this.intervalosActivos.push(intervaloId);
    console.log("Iniciando la verificación del estado de los amigos amigos en línea.");
  };

  detenerVerificacionEstado(): void {
    this.intervalosActivos.forEach(intervalId => clearInterval(intervalId));
    this.intervalosActivos = [];
    console.log("Deteniendo verificación...");
  };

  private verificarEstados(): void {
    this.amigos.forEach(amigo => {
      const cambioEstado = Math.random() < 0.5; 
      if (cambioEstado) {
        const nuevoEstado = !amigo.enLinea;
        this.actualizarEstadoAmigo(amigo.nombre, nuevoEstado);
      };
    });
  };

  mostrarListaAmigos(): void {
    if (this.amigos.length > 0) {
      console.log("\n--- Lista de Amigos ---");
      this.amigos.forEach(amigo => {
        console.log(`Nombre: ${amigo.nombre}, Estado: ${amigo.enLinea ? 'En línea' : 'Fuera de línea'}`);
      });
    } else {
      console.log("\nTu lista de amigos está vacía.\n");
    };
  };
};

//Ejemplo de uso
const redSocial = new EstatusAmigos();

// Añadir amigos
redSocial.añadirAmigo("Michelle");
redSocial.añadirAmigo("María", true);
redSocial.añadirAmigo("Zamanta");
redSocial.añadirAmigo("Leslie", true);
redSocial.mostrarListaAmigos();
redSocial.verificacionEstado();

setTimeout(() => {
  redSocial.actualizarEstadoAmigo("Michelle", true);
}, 8000);

setTimeout(() => {
  redSocial.actualizarEstadoAmigo("Leslie", false);
},6000);

setTimeout(() => {
  redSocial.actualizarEstadoAmigo("Zamanta", true);
}, 10000);

setTimeout(() => {
  redSocial.detenerVerificacionEstado();
}, 50000);
