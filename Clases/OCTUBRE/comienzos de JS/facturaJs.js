// OBJETO FACTURA
let factura = {
    empresa: {
        nombre: "Mi Empresa SA",
        direccion: "Mi direccion , 34",
        telefono: "Mi telefono 9999",
        NIF: "Mi-4t2095-vs0",
    },
    cliente: {
        nombre: "Mi cliente 0012",
        direccion: "La direccion , 34",
        telefono: "telefono 9999",
        NIF: "Mi-4gewr3395-vs0",
    },
    elementos: [
        {descripcion: "Procucto A", precio: 10, cantidad: 234},
        {descripcion: "Procucto B", precio: 130, cantidad: 67},
        {descripcion: "Procucto C", precio: 420, cantidad: 899}
    ],
    tipoIVA: 0.21,
    formaPago: "transferencias",
    importeTotal: 0,

    calcularTotal: function () {
        let total = 0;
        this.elementos.forEach(item => {
            total += item.precio * item.cantidad
        });
        total += total * this.tipoIVA
        this.importeTotal = total;
    },

    mostrarTotal: function () {
        const divFactura = document.querySelector("#factura");
        divFactura.innerHTML = `
            <h2>${this.empresa.nombre}</h2>
            <p><strong>Cliente: </strong>${this.cliente.nombre}</p>
            <ul>
                ${this.elementos.map(item => `<li>${item.cantidad} X ${item.descripcion} @${item.precio} </li>`).join(' ')}
            </ul>
            <p><strong>IVA: </strong>${this.tipoIVA * 100} % </p>
            <p>Forma de pago: ${this.formaPago} </p>

            <h3>${this.importeTotal.toFixed(2)} € </h3>
        `
    }
};
// empresa (nombre, direcc,tel,NIF)
// cliente (nombre, direcc,tel,NIF)

// productos (descripción. precio, cantidad)
// metodos para calcular el importe - calcularTotal()
// mostrarTotal()

factura.calcularTotal();
factura.mostrarTotal();