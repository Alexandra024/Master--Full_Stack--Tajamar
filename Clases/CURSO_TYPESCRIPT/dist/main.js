var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import promptSync from "prompt-sync";
import process from "process";
const prompt = promptSync();
// Decoradores de validacion
function IsPositive(target, propertykey) {
    // Crear una llave oculta(symbol)
    const key = Symbol(String(propertykey));
    // Redefinir como funciona la propiedad
    Object.defineProperty(target, propertykey, {
        get() {
            return this[key];
        },
        set(v) {
            if (v <= 0)
                throw new Error(`${String(propertykey)} debe ser positivo`);
            this[key] = v;
        },
        enumerable: true,
        configurable: true
    });
}
;
function IsString(target, propertykey) {
    const key = Symbol(String(propertykey));
    Object.defineProperty(target, propertykey, {
        get() {
            return this[key];
        },
        set(v) {
            if (typeof v !== "string")
                throw new Error(`${String(propertykey)} debe ser string`);
            this[key] = v;
        },
        enumerable: true,
        configurable: true
    });
}
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
__decorate([
    IsPositive
], Producto.prototype, "id", void 0);
__decorate([
    IsString
], Producto.prototype, "nombre", void 0);
__decorate([
    IsPositive
], Producto.prototype, "precio", void 0);
class ProductoServicio {
    constructor() {
        this.productos = [];
    }
    addProduct(producto) {
        this.productos.push(producto);
    }
    listarProductos() {
        return this.productos;
    }
    updateProduct(id, data) {
        const producto = this.productos.find(p => p.id === id);
        if (!producto)
            return false;
        if (data.nombre !== undefined)
            producto.nombre = data.nombre;
        if (data.precio !== undefined)
            producto.precio = data.precio;
        return true;
    }
    deleteProduct(id) {
        const index = this.productos.findIndex(p => p.id === id);
        if (index === -1)
            return false;
        this.productos.splice(index, 1);
        return true;
    }
}
const service = new ProductoServicio();
//Funciones del menu
function listarProductos() {
    const productos = service.listarProductos();
    if (productos.length === 0)
        console.log("No hay productos");
    else
        productos.forEach(p => {
            console.log(`${p.id} - ${p.nombre} - $${p.precio}`);
        });
}
function annadirProducto() {
    try {
        const id = Number(prompt("ID: "));
        const nombre = prompt("Nombre: ") ?? "";
        const precio = Number(prompt("PRECIO: "));
        const producto = new Producto(id, nombre, precio);
        service.addProduct(producto);
        console.log("Producto añadido correctamente");
    }
    catch (error) {
        console.error("Error: ", error.message);
    }
}
function actualizarProducto() {
    try {
        const id = Number(prompt("ID a actualizar: "));
        const producto = service.listarProductos().find(p => p.id === id);
        if (!producto) {
            console.log("no existe producto con ese ID");
            return;
        }
        const nombre = prompt(`Nombre: (${producto.nombre}):`) || producto.nombre;
        const precioTexto = prompt(`Nuevo precio: (${producto.precio}):`);
        const precio = precioTexto.trim() ? Number(precioTexto) : producto.precio;
        const ok = service.updateProduct(id, { nombre, precio });
        console.log(ok ? "Product actualiz correct" : "No se pudo actualiz");
    }
    catch (error) {
        console.error("Error: ", error.message);
    }
}
function eliminarProducto() {
    const id = Number(prompt("ID a eliminar?: "));
    const ok = service.deleteProduct(id);
    console.log(ok ? "Producto eliminado correctamente " : "No se pudo eliminar el registro");
}
// MENU
function iniciarMenu() {
    while (true) {
        console.log("\n--- Gestión de Productos ---");
        console.log("1. Listar productos");
        console.log("2. Añadir producto");
        console.log("3. Actualizar producto");
        console.log("4. Eliminar producto");
        console.log("5. Salir");
        const opcion = prompt("Elige una opción: ")?.trim();
        switch (opcion) {
            case "1":
                listarProductos();
                break;
            case "2":
                annadirProducto();
                break;
            case "3":
                actualizarProducto();
                break;
            case "4":
                eliminarProducto();
                break;
            case "5":
                console.log("Saliendo...");
                process.exit(0);
            default:
                // break;
                console.log("opcion NO valida...");
        }
    }
}
service.addProduct(new Producto(1, "Teclado mecánico RGB", 899));
service.addProduct(new Producto(2, "Ratón inalámbrico", 450));
service.addProduct(new Producto(3, "Monitor 27 pulgadas", 249));
service.addProduct(new Producto(4, "Auriculares gaming", 60));
service.addProduct(new Producto(5, "Alfombrilla XL", 1));
iniciarMenu();
