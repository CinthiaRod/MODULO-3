// Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
// Crea un sistema de gestión de productos en una tienda de belleza.
// Define una clase Producto con atributos como nombre, precio y categoria.
class Producto {
    nombre: string;
    precio: number;
    categoria: string;
    
    constructor(nombre: string, precio: number, categoria: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    };
    
     mostrarDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Categoría: ${this.categoria}`);
    };
};
    
// Luego, crea una clase Inventario que gestione un conjunto de productos
// y tenga métodos para agregar, eliminar y buscar productos por categoría.
// Usa polimorfismo para manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar, etc.
class Cosmetico extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio, 'Cosmético');
    };
    
    override mostrarDetalles(): void {
        super.mostrarDetalles();
        console.log('Tipo: Maquillaje');
    };
};

class TratamientoCapilar extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio, 'Tratamiento Capilar');
    };
    override mostrarDetalles(): void {
        super.mostrarDetalles();
        console.log('Beneficios: Reparación e hidratación'); 
    }; 
};

class Cremas extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio, 'Cremas');
    };
    
    override mostrarDetalles(): void {
        super.mostrarDetalles();
        console.log('Ideal para: Hidratación facial');
    }
};
    
class Inventario {
    private productos: Producto[] = [];
     
    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`${producto.nombre} agregado al inventario.`);
    };
    
    eliminarProducto(nombre: string): void {
        const indice = this.productos.findIndex(p => p.nombre === nombre);
        if (indice > -1) {
            const productoEliminado = this.productos.splice(indice, 1)[0];
            console.log(`${productoEliminado.nombre} eliminado del inventario.`);
        } else {
            console.log(`No se encontró el producto con el nombre "${nombre}".`);
        };
    };
    
    buscarProductosPorCategoria(categoria: string): Producto[] {
        return this.productos.filter(producto => producto.categoria === categoria);
    };
    
    mostrarInventario(): void {
        if (this.productos.length === 0) {
            console.log('El inventario está vacío.');
            return;
        };
        console.log('\n--- Inventario de Productos ---');
        this.productos.forEach(producto => producto.mostrarDetalles()); 
    };
};
    
// Ejemplo de uso
const inventarioBelleza = new Inventario();
    
const labialRosa = new Cosmetico('Labial rosa nude', 85);
const shampoo = new TratamientoCapilar('Shampoo Reparador de rizos', 430);
const maquillaje = new Cosmetico('Maquillaje Ivory en polvo', 350);
const cremaFacial = new Cremas ('Crema hidratante con vitamina C', 230);
    
inventarioBelleza.agregarProducto(labialRosa);
inventarioBelleza.agregarProducto(shampoo);
inventarioBelleza.agregarProducto(maquillaje);
inventarioBelleza.agregarProducto(cremaFacial);
inventarioBelleza.mostrarInventario();
    
const cosmeticos = inventarioBelleza.buscarProductosPorCategoria('Cosmético');
console.log('\n--- Cosméticos en el inventario ---');
cosmeticos.forEach(cosmetico => cosmetico.mostrarDetalles());
    
inventarioBelleza.eliminarProducto('Shampoo Reparador de rizos');
   
inventarioBelleza.mostrarInventario();