
// USAR EL PLUGIN "CODE RUNNNER" E IR EJECUTANDO TROZOS DE CÓDIGO

//flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//flat map
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

//trimStart
let hello = "        hello world";
console.log(hello);
console.log(hello.trimStart());

//trimEnd
let hello = "hello world        ";
console.log(hello);
console.log(hello.trimEnd());

//Object.fromEntries
let entries = [["name","oscar"],["age","32"]];
console.log(Object.fromEntries(entries));

//Symbol
let mySymbol = "My Simbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);