//MODULOS

//import{ type RankingTuple, printRankings } from './myRankingModule';

//const rankings: RankingTuple[] = [
  //  [1, 'Alice', true],
    //[2, 'Bob', false],
    //[3, 'Charlie', true]
//];

//printRankings(rankings);


//En el package.json, activo la opcion de type:module.


//CLASES 

// class Actor{
//     private _name: string;
//     constructor(name: string){
//         this._name = name;
//     }

//     set name(value: string){
//         this._name = value;
//     }


//     get name(){
//         return this._name;
//     }
// }


// let actor = new Actor('Leonardo DiCaprio');
// console.log(actor.name); // Output: Leonardo DiCaprio

// actor.name = 'James Brown';
// console.log(actor.name); // Output: James Brown



// class Employee{
//     public name: string;
//     protected age: number;
//     private mobile: string;

//     constructor(name: string, age: number, mobile: string){
//         this.name = name;
//         this.age = age;
//         this.mobile = mobile;
//     }

//     get Name(){
//         return this.name;
//     }
//     set Name(name:string){
//         this.name = name;
//     }

//     get Age(){
//         return this.age;
//     }
//     set Age(age:number){
//         this.age=age;
//     }

//     get Mobile() { return this.mobile; }
//     set Mobile(mobile: string) { this.mobile = mobile; }
// }

// class Manager extends Employee{
//     constructor(name:string,age:number,mobile:string){
//         super(name,age,mobile);
//         this.Age + 1 ;
//     }

//     celebrateBirthday(){
//         this.age +=1;
//     }
    
// }

// let manager = new Manager("Jane", 23, "63400500340030");
// console.log(manager.Name);
// console.log(manager.Age);
// console.log(manager.Mobile);

// manager.Mobile="6830946803952452";
// manager.celebrateBirthday();

// CLASE ABRTRACTA

// abstract class Product{
//     productName:string="Default";
//     price:number=1000;

//     abstract changeName(name:string):void;

//     calcPrice(){
//         return this.price;
//     }
// }

// class Mobile extends Product{
//     changeName(name: string): void {
//         this.productName = name;
//     }
// }

// interface Vehiculo{
//     marca:string;
//     encender():void;
//     apagar():void;
// }

// class Coche implements Vehiculo{
//     marca:string;

//     constructor(marca: string) {
//         this.marca = marca;
//     }
//     encender():void{
//         console.log(`${this.marca} esta encendido`);
//     }
//     apagar():void{
//         console.log(`${this.marca} esta apagado`);
//     }
// }

// let miCoche = new Coche("Toyota");
// miCoche.apagar();
// miCoche.encender();


// let mobProduct = new Mobile();
// console.log(mobProduct);

// mobProduct.changeName("Super mobile");
// console.log(mobProduct);

// DECORADORES
// "experimentalDecorators": true

// function Logger(constructor: Function){
//     console.log(`Clase registrada : ${constructor.name}`)
// }

// @Logger
// class Persona{
//     constructor(public nombre:string);
// }

// const persona = new Persona("Jesus");
// console.log(persona);
// // Jesus
// // Consola: "Clase registrada: Persona"

// function log<T extends {new(...args: any[]): {}}>(originalConstructor: T){
//     return class extends originalConstructor{
//         constructor(...args: any[]){
//             console.log("Argumentos",args.join(", "));
//             super(...args);
//         }
//     }
// }
// class Person{
//     constructor(name:string,age:number){
//         console.log(`Creando Persona: ${name} - ${age}`)
//     }
// }

// function MethodLogger(target: any, methodName: string, descriptor: PropertyDescriptor){
//     const originalMethod=descriptor.value;
//     descriptor.value=function(...args: any[]){
//         console.log(`LLamando a ${methodName} con argumentos : ${JSON.stringify(args)}`);
//         return originalMethod.apply(this,args); 
//     }
// }

// class Calculadora{
//     @MethodLogger
//     sumar(a:number,b:number):number{
//         return a+b;

//     }
// }

// const calc = new Calculadora();
// console.log(calc.sumar(10,3));

// -----------
// function mostrarUsuario(user){
//     console.log(user.nombre.toUpperCase());
// }

// mostrarUsuario({ name: "Ana" }); // crash

// bien?
interface Usuario {
    nombre: string;
    edad: number;
}

function mostrarUsuario(user:Usuario){
    console.log(user.nombre.toUpperCase());
}

// mostrarUsuario({nombre: "Joly" }); // crash
