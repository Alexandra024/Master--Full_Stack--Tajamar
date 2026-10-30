    //Definir y usar funciones
//const myFunc = function () {
//       console.log("esta sentencia esta dentro de la funcion");
//}
//console.log("Esta sentencia esta fuera de la funcion");

    //Funciones con parametros
// function myFunc(name, weather) {
//     console.log(`Hello ${name}`);
//     console.log(`It is ${weather} today`);
// }

// myFunc("Sara")

    //Parametros Rest

// function myFunc(name, weather, ...extraArgs) {
//     console.log(`Hello ${name}`);
//     console.log(`It is ${weather} today`);
//     for (let i = 0; i < extraArgs.length; i++) {
//         console.log(`Extra Args: ${extraArgs[i]}`);
//     }
// }

// myFunc("Javier", "sunny", "one", "two", "three");

    //Callback de functions

// function myFunc(nameFunction) {
//     return (`Hello ${nameFunction()}.`)
// }

// function printName(nameFunction, printFunction) {
//     printFunction(myFunc(nameFunction));
// }

// printName(function () { return "Javier" }, console.log);

    //Funciones Flecha
//const myFunc = (nameFunction) => (`Hello ${nameFunction}.`);

//const printName = (nameFunction, printFunction) =>
//       printFunction(myFunc(nameFunction));
//       printName(function () { return "Javier" }, console.log);

// function messageFunction(name, weather) {
//     let message = `Hello ${name}`
//     if (weather === "sunny") {
//         let message = "Its a nice day";
//         console.log(message);
//     } else {
//         let message = `Its ${weather} today`;
//         console.log(message);
//     }
//     console.log(message);
// }

// messageFunction("Javier", "raining");

    //Tipos Primitivos
//Booleans
// let firstBool = true;
// let secondBool = false;

//Strings
// let firstAString = "This is a string";
// let secondString = "And so is this";

//Template String
// let weather = "sunny";
// let message = `Its ${weather}.`;

//Numbers
// let daysInWeek = 7;
// let pi = 3.14;
// let hexValue = 0xFFFF;

//Operadores
//Operador de Igualdad
// let firstVal = 5;
// let secondVal = "5";
// if (firstVal == secondVal) {
//     console.log("Son lo mismo") // respuesta correcta , si son === no lo son
// } else {
//     console.log("! Son lo mismo")
// }

    //Conversiones
//Numbers to string
// let myData1 = (5).toString() + String(5);
// console.log(`REsult: ${myData1}`);

//string to numbers
// let firstVal = 5;
// let secondVal = "5";
// let result = Number(secondVal) + firstVal;

// Metodos
// Number(str);
// parseInt(str);
// parseFloat(str);

// -- TITULO
// myArray[0] = 100;
// myArray[1] = "Javier";
// myArray[2] = true;

// let myArray1 = [100, "Javier", true];
// console.log(`Index o: ${myArray1[0]}`);

//Enumerando el array
// for (let i = 0; i < myArray1.length; i++) {
//     console.log(`Index ${i} : ${myArray1[i]}`);
// }

// myArray1.forEach((value, index) => console.log(`index : ${index} : ${value}`));

//Spread operator: Operador de propagación
// function printItems(numValue, stringValue, boolValue) {
//     console.log(`Number: ${numValue}`);
//     console.log(`String: ${stringValue}`);
//     console.log(`Bool: ${boolValue}`);
// }

// let myArray1 = [100,"Javier", true]
// printItems(...myArray1);

// let numeros = [2, 4, 6, 8, 10];

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log("Todos son pares?", todosPares);

// // filter
// let mayoresQueDiez = numeros.filter(num => num >= 10);

// let pares = numeros.filter(num => num % 2 === 10);

// // find
// let mayoresQue10 = numeros.filter(num => num > 10);


// let frutas = ["pera", "manzana", "platano", "naranja"];
// let frutaLarga = frutas.find(fruta => fruta.length > 6);

// // findIndex
// let indice = numeros.findIndex(num => num = 100); // si no lo tiene devuelve -1

// // foreach
// let nombres = ["sara", "fran", "pepe", "lalo"];
// nombres.forEach(nombres => {
//     console.log('Hola ${nombre}');
// })

// let numeros1 = [2, 4, 6, 8, 10];

// numeros1.forEach(num => {
//     console.log('El cuadrado de ${num} = ${Math.pow(num,2)}');
// })

// // includes 
// let frutas1 = ["pera", "manzana", "platano", "naranja"];
// let tienePera = frutas1.includes("pera");

// // map
// let numeros1Doble = numeros1.map(num => num * 2 )

// let nombres1 = ["sara", "fran", "pepe", "lalo"];

// let saludos = nombres1.map(nombre => 'Hola ${nombre}');

// // reduce
// const suma = [10, 20 , 30].reduce(function(a,b) {return a + b});

// let products = [
// { name: "Hat", price: 24.5, stock: 10 },
// { name: "Kayak", price: 289.99, stock: 1 },
// { name: "Soccer Ball", price: 10, stock: 0 },
// { name: "Running Shoes", price: 116.50, stock: 20 }
// ];

// let totalValue = products.filter(item => item.stock > 0).
//     reduce((prev , item) => prev + (item.price * item.stock) , 0 )


//MODULOS EN JAVASCRIPT
//DIVIDIR EL CODIGO EN VARIOS ARCHIVOS
//CADA UNO DE LOS MODULOS MANEJA SUS VARIABLES, FUNCIONES O SUS CLASES EXPORT
//MODULO QUE QUIERE USAR TIENE QUE IMPORT
 
//OBJETOS
 
 
/*let laCadena = new String();
 
elObjeto.id = "10";
elObjeto.nombre = "Objeto de prueba";
 
elObjeto.muestraId = function () {
    alert(`El id del objeto es ${this.id}`);
} */
/*let elObjeto = new Object();
let laCadena = new String();
 
elObjeto.id = "10";
elObjeto.nombre = "Objeto de prueba";
 
elObjeto.muestraId = function () {
    alert(`El id del objeto es ${this.id}`);
}
elObjeto.muestraNombre = function () {
    alert(this.nombre);
}
 
 
let aplicacion = new Object();
 
aplicacion.modulos = new Array();
 
aplicacion.modulos[0] = new Object();
 
aplicacion.modulos[0].titulo = "parasitos";
 
let inicial = new Object();
 
inicial.estado = 1;
inicial.publico = 0;
inicial.nombre = "modulo rss";
inicial.datos = new Object();
 
aplicacion.modulos[0].objeto = inicial;
*/
/*
let myData = new Object();
myData.name = "Javier";
myData.weather = "sunny";
 
let myData2 = {
    name,
    weather : "sunny"
}
 
let myData3 = {
    name : "Javier",
    weather: "sunny",
    printMessages: function () {
        console.log(`hello ${myData3.name}`);
        console.log(`hello ${myData3.weather}`);
    }
}
 
myData3.printMessages();
 
console.log(`Hello ${myData.name}`);
 
//enviando datos al servidor
 
let myObj = {
    "name": "Jhon",
    "age": "31",
    "city": "Madrid"
};
const myJSON = JSON.stringify(myObj);
 
localStorage.setItem("testJSON", myJSON);
 
const text = localStorage.getItem("testJSON");
const obj = JSON.parse(text);
document.querySelector("#demo").innerHTML = obj.name;
 
 
//POST
fetch("demo_json.aspx", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(myObj)
});
 
//GET
fetch("demo_json.aspx").then(response => response.json).then(myObject => {
    document.querySelector("#demo").innerHTML = myObject.name;
});
 
 
*/
/*
class MyData {
    constructor() {
        this.name = "Javier";
        this.weather = "sunny";
    }
 
    printMessages = () => {
        console.log(`hello ${this.name}`);
    }
}
 
let myData = new MyData();
let secondObject = { ...myData, weather ="sunny" };
Object.assign(secondObject, myData);
 
secondObject.printMessages();
*/
 
// class Empleado extends Persona {
//     constructor(nombre, edad, puesto) {
//         super(nombre, edad);
//         this.puesto = puesto;
//     }
 
//     trabajar() {
//         console.log(`${this.nombre} esta trabjanado en ${this.puesto}`);
//     }
// }
 
// const empleado1 = new Empleado("Luis", 30, "Ingeniero");
// empleado1.trabajar();
 
 
// const myData = {
//     name: "Javier",
//     location: {
//         city: "Madrid",
//         country: "Spain"
//     },
//     employment: {
//         title: "Manager",
//         dept : "Sales"
//     }
// }
 
// function printDetails(data) {
//     console.log(`Name : ${data.name}, City : ${data.location.city}, Role : ${data.employment.title}`);
// }
 
// function printDetails2({name, location: { city }, employment: { title }}) {
//     console.log(`name : ${name}, city : ${city}, Role ${title}`);
// }
 
// printDetails(myData);
// printDetails2(myData);

// GETTERS Y SETTERS
// en el archivo de VariosHTML.html
