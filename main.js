let lista = ["Julian", "Andres", "Barrera", "Diaz", "Marcela", "Sanchez"];

let lista_pop = lista.pop();

console.log("Lista Original");
console.log(lista);
console.log("\nlista metodo .pop");
console.log(lista_pop);

let lista_Push = lista.push("Pamba");
console.log("lista método .push");
console.log(lista_Push);

let lista_Shift = lista.shift();
console.log("lista método .shift");
console.log(lista_Shift);

let lista_Unshift = lista.unshift({nombre:"Diaz"});
console.log("lista método .unshift");
console.log(lista_Unshift);

let lista_Splice = lista.splice(3,1,{id:123456});
console.log("lista método .splice");
console.log(lista_Splice);

let lista_Sort = lista.sort((a,b) => console.log(a, b));
console.log("lista método .sort");
console.log(lista_Sort);


