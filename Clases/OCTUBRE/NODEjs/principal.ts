const booleano:boolean = true;

const isDone:boolean = false;

const entero:number = 10;
const decimal:number = 10.5;

const bigInt:bigint = 534857258n;
const str:string = "Hey world";
let color:string = "Blue";

color="red";

let fullName:string = "Blue buuuue";
let age:number = 32;
let sentence:string = "Blue buuuue is ${fullName}. i´ll be ${age + 1} old next month";

type CustomType =  string | number ;
let varIABLE:CustomType = "HOLA";

varIABLE= 10;

const numberArray: number[] = [1,3,5,6,7];
const booleanArray: boolean[] = [true, true, false, true];
const stringArray: string[] = ["hzdfhb", "jktu", "heth"];

type ArrayCustomType =  string | number ;

const valueArray:ArrayCustomType[] = ["hzdfhb", 1,2,4, "jktu", "heth"];
let lista:Array<number>=[2,42,42478,95,204];

// TUPLA: DATO ESPECIAL PARA DEFINIR UNA ARRAY CON UN Nº FIJO DE ELEMENTOS
// Y TIPOS EN POSICIONES DETERMINADAS

let x: [string, number];
x = ['hello', 10];

let tuplaOpcional: [string, number?];
tuplaOpcional = ["Texto"];
tuplaOpcional = ["Texto", 87];
//spread opèrator

let spreadTupla: [number, ...string[]]; // texto obligatorio pero numero no
spreadTupla = [1];
spreadTupla = [1, "a", "b", "c"];

// Tuplas relacionadas

// const persona: [string, number] = ["Juan", 25];
// const [nombre, edad] = persona;

// console.log(nombre);
// console.log(edad);

// ----------

function getUsuario() : [string,number] {
    return ["Alice",30];
}
const [nombre,edad] = getUsuario();
 
console.log("Nombre", nombre);
console.log("Edad", edad);
// .... no lo tengo
let notSure: any = 4;
notSure = "puede ser cualquier cosa";
notSure = true;

notSure = [1, "hola", true, 2];

console.log();

// Never
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}
function saludar(): void {
    console.log('hola');
}

// Enum
enum Direccion{
    Norte, // tambien se le pueden dar valor numerico: como Norte=1 
    Sur,
    Este,
    Oeste
}
console.log(Direccion.Norte);

// roles.ts -- PENDIENTE
export const Rol={
    Admin:"admin",
    User:"user",
    Local:"local"
}
console.log(Rol.Admin);

function procesar(callback : () => void): void {
    callback();
}
procesar(()=>{
    console.log("Procesando....");
})
//javascript typeof null
//typescript tipo especifico null

const pepe: null = null;
const juan: undefined = undefined;

console.log();

// DESPUES DEL DESCANSO ---------------

interface User {
    name: string;
    organization: string;
    email: string;
}

interface UserWithId extends User {
    id: string;
}

const addUserId = ({name, organization, email}: User): UserWithId => {
    const id: string = crypto.randomUUID();
    return {id, name, organization, email}
}

const UserWithId : User = {
    name: "Pepe",
    organization: 'Tajamar',
    email: "pepe@tajamar365.com"
}

const userWithId = addUserId(UserWithId);

//FUNCTIONS
function sumar(a: number, b: number): number {
    return a + b;
}

const dividir = (a: number, b: number): number => {
    return a / b;
}
// function saludar(nombre: string, edad?: number): string {
//     if (edad !== undefined) {
//         return `Hola ${nombre} tienes ${edad} años`;
//     }
//     return `hola ${nombre}`;
// }

function calcularDescuento(precio: number, descuento: number = 10): number {
    return precio = (precio * descuento) / 100;
}
console.log(calcularDescuento(100, 20));

//REST
function sumarTodo(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumarTodo(1,3,34,3));

//SOBRECARGA DE FUNCIONES
function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;

function combinar(a: any, b: any): any {
    return a + b;
}

console.log(combinar(1, 2));
console.log(combinar("hola", "mundo"));

//Funciones tipadas
type Operacion = (a: number, b: number) => number;

const restar: Operacion = (a, b) => a - b;
console.log(restar(10, 4));

//Funciones genericas
function identidad<T>(valor: T): T {
    return valor;
}

console.log(identidad(123));
console.log(identidad("`pepe"));

//Funciones Asincronas
async function obtenerDatos(): Promise<string> {
    return "Datos Obtenidos";
}

obtenerDatos().then((datos) => console.log(datos));

//Tipos utilizados con Promise
//Promise<void>
//Promise<T>
//Promise<unknown>

interface UseR{
    id: number;
    name: string;
    email: string;
}

function fetchUser(): Promise<UseR>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                name: "Juan Peres",
                email: "juanperes@gmail.com"
            });
        }, 2000);
    });
}

fetchUser() // creo q esta cogiendo una funcion anterior
.then(user=>{
    console.log(user.name)
})
.catch(error=>{
    console.error("Error",error);
})

async function getUserData(){
    try{
        const user = await fetchUser();
        console.log(user.name);
    }
    catch(error){
        console.log(error);
    }
}

getUserData();

// Declare: en archivos con extension nombreArchivo.d.ts

// declare function saludar(nombre:string):void; // actualmente comentada
declare var miVarGlobal : number;

// CAST
// as
 
let cualquierValor: any = "hola";

let longitud:number = (cualquierValor as string).length;
interface Persona{
    nombre: string;
    edad: number;
}

let cualquierObjeto: any = {nombre:"Alice",edad:30};
let personas = cualquierObjeto as Persona;

console.log(personas.nombre);

//estructuras iterativas
//for..In --> devuelve los indices como cadenas
//for..of --> devuelve los valores

let list=[4,5,6];
for(let i in list){
    console.log(i); //"0","1","2"
}

for(let i of list){
    console.log(i) //"4","5","6"
}

//Modulos
// fichero A
export type RankingTuple = [number,string,boolean];

export function printRankings(rankings: Array<RankingTuple>): void {
    for (let ranking of rankings) {
        console.log(ranking);
    }
}

// fichero B
// import { type RankingTuple, printRankings } from "ficheroA.ts"; // por ejemplo

const rankings: RankingTuple[] = [
    [1, "Pepe", false]
]


