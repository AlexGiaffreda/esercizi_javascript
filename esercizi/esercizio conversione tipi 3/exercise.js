// PROGRAMMA ORIGINALE
/* 

let variable = true;

console.log(variable + " " + typeof(variable));
console.log(Number(variable) + " " + typeof(Number)(variable));
console.log(String(variable) + " " + typeof(String)(variable)); SBAGLIATO.
console.log(Boolean(variable) + " " + typeof(Boolean)(variable));
*/

// SOLUZIONE 

let variable = true;
console.log(variable);
console.log(typeof variable);

variable = Number(variable);
console.log(variable);
console.log(typeof variable);

variable = String(variable);
console.log(variable);
console.log(typeof variable);

variable = Boolean(variable);
console.log(variable);
console.log(typeof variable);
