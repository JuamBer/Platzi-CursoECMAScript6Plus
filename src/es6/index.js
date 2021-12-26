// USAR EL PLUGIN "CODE RUNNNER" E IR EJECUTANDO TROZOS DE CÓDIGO

//1. PARÁMETROS POR DEFECTO
//CON ES5
function newFunction(name, age, country) {
    var name = name || "Oscar";
    var age = age || 32;
    var country = country || "MX";

    console.log(name, age, country)
}
newFunction();
//CON ES6
function newFunction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country)
}
newFunction2();

//2. CONCATENACIÓN
let hello = "Hello";
let world = "World";
//CON ES5
let epicPhrase = hello + " " + world
console.log(epicPhrase);
//CON ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

//3. MULTILÍNEA 
//CON ES5
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n" +
    "otra frase epica que necesitamos.";
console.log(lorem);

//CON ES6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
otra frase epica que necesitamos.`;
console.log(lorem2);

//4. DESESTRUCTURACIÓN  
let person = {
    "name": "Oscar",
    "age": 32,
    "country": "MX"
}
//CON ES5
console.log(person.name, person.age);
//CON ES6
let { name, age } = person;
console.log(name, age);

//5. SPREAD OPERATOR
let team1 = ["Oscar","Julian","Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"]

//CON ES6
let education = ["David", ...team1, ...team2];
console.log(education);

//6. LET
//CON ES6
{
    var globalVar = "Global Var"
    console.log(globalVar);
}
{
    let globalLet = "Global Let"

    console.log(globalLet);
}
console.log(globalVar);
console.log(globalLet);

//7. CONST
//CON ES6
const a = "b";
a = "b";

//8. OBJETOS
let name = "Oscar";
let age = 32;
//CON ES5
obj = { name:name, age:age };
console.log(obj);
//CON ES6
obj2 = { name,age }
console.log(obj1);


//9. ARROW FUNCTIONS
let names = [
    { name: "Oscar", age: 32},
    { name: "Yesica", age: 27}
]
//CON ES5
let listOfNames = names.map(function(item){
    console.log(item.name)
});

//CON ES6
let listOfNames2 = names.map(item => {
    console.log(item.name)
});


//10. PROMESAS
//CON ES6
const helloPromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("Hey!");
        }else{
            resolve("Ups!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//11. CLASES
//CON ES6
class Calculadora {
    constructor(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
    }
    sum(){
        return this.valueA + this.valueB
    }
}
const calc = new Calculadora(5,6);
console.log(calc.sum());

//12. IMPORT Y EXPORT
//CON ES6
import { helloTest } from './module.js';
helloTest();


//13. GENERADORES
//CON ES6
function* helloWorld(){
    if(true){
        yield "Hello, ";
    }
    if (true) {
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);