function saludar() {
    alert('hola Master');
}

function decirAdios() {
    alert('adios');
}

//Array, Date, Math, String, Navigator
//POO --> Propiedades, Metodos, Eventos

//window.location = direccion url del documento que se muestra en ventana
let Url = window.location;

//String: representa una cadena de caracteres
//Propiedades : length: numero de caracteres de la cadena

let miCadena = "hola master";
let miCd = miCadena.length; // --> 11

//Metodo : toLowerCase(), toUpperCase()
let mayuscula = miCadena.toUpperCase();

//Math:
//Propiedades Pi
//Metodos : max()

let pi = Math.PI;
let maMax = Math.max(10, 2, 9, 16);
let mostrarUno = false;

//Eventos

function cargar() {
    alert("se ha cargado la pagina");
}

function manejarFoco(field) {
    if (!mostrarUno) {
        alert("Has focalizado esta caja de texto")
        mostrarUno = true;
        field.focus();
    }
}

function manejarSalida() {   
    alert("Has salido de la caja de texto") 
}

function validarDato(dato) {
    alert(`Cambio de el valor orignial de 30 a ${dato}`)
}

//Array: coleccion de variables de datos relacionados

let diasSemana = new Array(7);
diasSemana[0] = "lunes";
diasSemana[2] = "miercoles";

let arrayNumeros = [1, 2, 3]

let frutas = ['pera', 'melocoton'];

frutas.pop() //elimina el ultimo del array
frutas.short() //ordena alfabetico o ordena ascendente si es numerico

//int float
let x = 2;
let y = "2";
let a = "5.1";

let w = parseInt(y);
let r = parseFloat(a);

let z = 5.1;

//String() -- clase // string -- tipo nativo

let pepe = new String();
pepe= "JosePerez";

let pepe1 = "Jose";

//Split()

function llamarSplit() { // no funciona a ratos pero esta bien escrito
    let diasSemana2 = "Domingo,Lunes,Martes,Miercoles,Jueves,Viernes,Sabado"; 
    var dias = diasSemana2.split(",");

    alert(dias[2]);
}