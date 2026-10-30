


/*const usuario = crearPerfilUsuario("Carlos", "carlos@gmail.com", { rol: "admin" });*/

class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    get sueldo() {
        return `${this.sueldoBase} €`;
    }

    set sueldo(nuevoSueldo) {
        if (nuevoSueldo < 1000) {
            console.error("Error el sueldo no puede ser menor de 1000");
        } else {
            this.sueldoBase = nuevoSueldo;
            console.log(`El sueldo nuevo es ${nuevoSueldo} `);
        }
    }
}

class ProductoEnOferta extends Producto {
    constructor(nombre, precio, descuento) {
        super(nombre, precio);
        this.descuento = descuento;
    }

    obtenerPrecioFinal() {
        const precioDescuento = this.precio - (this.precio * (this.descuento) / 100);
        return precioDescuento;
    }
}

const zapatillas = new Producto("Zapatillas", 100);
const zapatillasConOferta = new ProductoEnOferta("Zapatillas", 100, 20);