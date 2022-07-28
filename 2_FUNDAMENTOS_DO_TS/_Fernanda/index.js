"use strict";
// NUMBER
let x = 10;
console.log(x);
x = 20;
console.log(typeof x);
const y = 25.24583;
console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));
// STRING
const firstName = "Fernanda";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Day";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// BOOLEAN
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
console.log(typeof a);
// Type annotation é o que fizemos até agora
// Type inference
const ann = "teste";
let inf = "teste";
// inf = 1; -- não consegue fazer esta atribuição, TS já entendeu que a variável é string
console.log("tsc -w : não precisa ficar recompilando, compila automaticamente");
const numero = 20;
console.log(numero);
console.log(typeof numero);
let numConvertido = numero.toString();
console.log(`O número informado é: ${numConvertido}`);
console.log(typeof numConvertido);
