"use strict";
// ARRAYS
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
console.log(numbers);
const nomes = ["Fernanda", "Day"];
console.log(nomes);
// outra sintaxe
const nums = [100, 200];
nums.push(500);
console.log(nums);
console.log(nums[10]);
// tipo de parâmetro em funções
function soma(a, b) {
    console.log(a + b);
}
soma(4, 6);
// soma("a", "b");
// tipo de retorno de funções
function greeting(name) {
    // return 5;
    return `Olá ${name}`;
}
console.log(greeting("Fernanda"));
// console.log(greeting(123));
// funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary));
    // console.log(sallary);
}, 2000);
