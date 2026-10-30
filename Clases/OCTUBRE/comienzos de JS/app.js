import {PI, suma, Circulo} from './mathUtils.js';

console.log('Valor de Pi es: ${PI}');


console.log('Suma de 2 + 3 es: ${suma(2,3)}');

const c = new Circulo(5);
console.log('Area de l circulo de radio 5 es: ${c.area()}');
