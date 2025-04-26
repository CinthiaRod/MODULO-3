// Ejercicio 6: Uso de this
// 1.Crea una clase llamada Mariposa con propiedades nombre y color, y un método volar() que use this para referirse a las propiedades de la instancia.
class Mariposa {
    public nombre: string;
    public color: string;
  
    constructor(nombre: string, color: string) {
      this.nombre = nombre;
      this.color = color;
    }
  
    public volar(): void {
      console.log(`El nombre de la mariposa es "${this.nombre}", la mariposa es de color ${this.color}, está volando.`);
    };
};  

// 2.Crea una instancia de la clase y llama al método.
const mariposaUno = new Mariposa("Monarca", "Naranja");
mariposaUno.volar();