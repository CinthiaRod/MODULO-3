// 6. Ejercicio de Supermercado
//Crea una clase Producto que contenga propiedades privadas como nombre, precio y cantidad. 
export class Producto {
    private _nombre: string;
    private _precio!: number;
    private _cantidad!: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        console.log(`\nInformación del producto:`)
        console.log(`${this._cantidad} ${this._nombre}---------$${this._precio}`);
    };
    public get nombre(): string {
        return this._nombre;            // Devuelve el nombre
    }

    public get precio(): number {
        return this._precio;
    };

    public set precio(value: number) {
//Utiliza getters y setters, asegurándote de que precio no sea negativo y que cantidad no sea menor que 0.
        if (value < 0) throw new Error("El precio no puede ser negativo."); 
        this._precio = value;
    };

    public get cantidad(): number {
        return this._cantidad;
    };
    public set cantidad(value: number) {
        if (value < 0) throw new Error("La cantidad no puede ser menor a 0.");
        this._cantidad = value;
    };
};

//Ejemplo de uso
const productoUno = new Producto ("Chocolate Zero", 25, 2)
const productoDos = new Producto ("Jugo Arizona", 18, 1)

