class CuentaBancaria {

    #saldo;

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    getSaldo() {
        return this.#saldo;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            return true;
        } else {
            return false;
        }
    }

    retirar(monto) {
        if (monto > 0 && monto < this.#saldo) {
            this.#saldo -= monto;
            return true;
        } else {
            return false;
        } 
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(titular, saldoInicial, tasaInteres = 0.02) {
        super(titular, saldoInicial);
        this.tasaInteres = tasaInteres;
    }

    aplicarInteres() {
        const interes = this.getSaldo() * this.tasaInteres;
        this.depositar(interes);
    }
}

//Cliente JavaScript
const miCuenta = new CuentaAhorros("Carlos Perez", 500);

const saldoDisplay = document.querySelector("#saldoDisplay");
const nombreTitular = document.querySelector("#nombreTitular");
const montoInput = document.querySelector("#monto");

function actualizaUI() {
    nombreTitular.textContent = miCuenta.titular;
    saldoDisplay.textContent = miCuenta.getSaldo().toFixed(2);

}

document.querySelector("#btnDepositar").addEventListener("click", () => {
    const monto = parseFloat(montoInput.value);
    if (miCuenta.depositar(monto)) actualizaUI();
    else alert("Monto invalido");
});

document.querySelector("#btnRetirar").addEventListener("click", () => {
    const monto = parseFloat(montoInput.value);
    if (miCuenta.retirar(monto)) actualizaUI();
    else alert("Saldo insuficiente");
});

document.querySelector("#btnInteres").addEventListener("click", () => {
    miCuenta.aplicarInteres();
    actualizaUI();
});