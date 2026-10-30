// Objeto reserva
const reserva = {
    hotel: {
        nombre: "Hotel Amanecer ",
        direccion: "Calle Málaga 10",
        telefono: "91265678"
    },

    cliente: {
        nombre: "Sara",
        apellidos: "Barsan",
        telefono: "604312345"
    },

    habitacion: {
        tipo: "Individual",
        precioNoche: 80,
        noches: 9
    },

    extras: [
        {
            descripcion: "Desayuno",
            precio: 12
        },
        {
            descripcion: "Parking",
            precio: 15
        }
    ],

    total: 0,

    calcularTotal: function () {

        let totalExtras = 0;

        for (let i = 0; i < this.extras.length; i++) {
            totalExtras += this.extras[i].precio;
        }

        this.total =
            (this.habitacion.precioNoche * this.habitacion.noches) +
            totalExtras;
    },

    mostrarReserva: function () {

        let listaExtras = "";

        for (let i = 0; i < this.extras.length; i++) {
            listaExtras += "<li>" +
                this.extras[i].descripcion +
                " - " +
                this.extras[i].precio +
                "€</li>";
        }

        document.getElementById("reserva").innerHTML =
            "<h2>Hotel</h2>" +
            "<p><strong>Nombre:</strong> " + this.hotel.nombre + "</p>" +
            "<p><strong>Dirección:</strong> " + this.hotel.direccion + "</p>" +
            "<p><strong>Teléfono:</strong> " + this.hotel.telefono + "</p>" +

            "<h2>Cliente</h2>" +
            "<p><strong>Nombre:</strong> " +
            this.cliente.nombre +
            " " +
            this.cliente.apellidos +
            "</p>" +
            "<p><strong>Teléfono:</strong> " + this.cliente.telefono + "</p>" +

            "<h2>Habitación</h2>" +
            "<p><strong>Tipo:</strong> " + this.habitacion.tipo + "</p>" +
            "<p><strong>Precio por noche:</strong> " + this.habitacion.precioNoche + "€</p>" +
            "<p><strong>Noches:</strong> " + this.habitacion.noches + "</p>" +

            "<h2>Extras</h2>" +
            "<ul>" + listaExtras + "</ul>" +

            "<h2>Total: " + this.total + "€</h2>";
    }
};

// Ejecutar los métodos
reserva.calcularTotal();
reserva.mostrarReserva();